import { FileController } from "../../adapters/controllers/FileController";
import { saveFileUsecase } from "./save-file";

const fileController = new FileController(saveFileUsecase);

export { fileController };