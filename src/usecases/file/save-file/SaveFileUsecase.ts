import multer from "multer";
import { v4 } from "uuid";
import { Request, Response } from "express";
import { SaveFileInvalidDataException } from "./SaveFileErrors";

//TODO: Remove the code about multer from here! This is not responsability of the usecase

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/uploads');
    },
    filename: function (req, file, cb) {
        cb(null,  v4() + file.mimetype.split('image/')[1]);
    }
});

const imageFilter = (req: any, file: any, cb: any) => {
    if (!file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

//TODO: implement limit sizes to the image
const imageLimits = {

}

const upload = multer({  fileFilter: imageFilter, storage: storage }).single('file');

export class SaveFileUsecase{
    async execute(req:Request, res: Response): Promise< void > {
        try {
            upload(req, res, err => {
                if(req.file)
                    res.status(201).json(
                        {
                            name: req.file.filename,
                            path: `/static/uploads/${req.file.filename}`
                        }
                    );
                else
                    throw new SaveFileInvalidDataException('None image was received on server, make sure you are passing an image file.');
            });
                
        } catch (error) {
            throw error;
        }
    }
}