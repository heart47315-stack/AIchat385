"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const characterController_1 = require("../controllers/characterController");
const router = (0, express_1.Router)();
router.get("/", characterController_1.getCharacters);
router.post("/", characterController_1.createCharacter);
exports.default = router;
