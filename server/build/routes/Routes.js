"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var authController_1 = require("../controllers/authController");
var todoController_1 = require("../controllers/todoController");
var multer_1 = require("../middlewares/multer");
var router = express_1.default.Router();
router.post("/", authMiddleware_1.checkUser);
router.post("/register", authController_1.register);
router.post("/login", authController_1.login);
router.get("/listData", todoController_1.listData);
router.post("/addData", todoController_1.addData);
router.patch("/updatePinned/:id", todoController_1.updatePinned);
router.delete("/deleteData/:id", todoController_1.deleteData);
router.put("/updateData/:id", todoController_1.updateData);
router.get("/userData/:id", authController_1.userData);
router.post("/profileImage/:id", multer_1.uploadMulter.single("image"), authController_1.profileImage);
exports.default = router;
