(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<app-game></app-game>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_game_map_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/game/map/map.component */ "./src/app/components/game/map/map.component.ts");
/* harmony import */ var _components_game_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game/dialogue/dialogue.component */ "./src/app/components/game/dialogue/dialogue.component.ts");
/* harmony import */ var _components_game_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game/header/header.component */ "./src/app/components/game/header/header.component.ts");
/* harmony import */ var _components_game_location_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/game/location/location.component */ "./src/app/components/game/location/location.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
                _components_game_map_map_component__WEBPACK_IMPORTED_MODULE_7__["MapComponent"],
                _components_game_dialogue_dialogue_component__WEBPACK_IMPORTED_MODULE_8__["DialogueComponent"],
                _components_game_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _components_game_location_location_component__WEBPACK_IMPORTED_MODULE_10__["LocationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game/dialogue/dialogue.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/game/dialogue/dialogue.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    position: fixed;\n    width: 97%;\n    bottom: 0;\n    margin: 0 20px;\n    margin-bottom: 0px;\n    cursor: pointer;\n\n    -webkit-animation: fadein 0.4s; /* Safari, Chrome and Opera > 12.1 */ /* Firefox < 16 */ /* Internet Explorer */ /* Opera < 12.1 */\n            animation: fadein 0.4s;\n    \n    -webkit-touch-callout: none; /* iOS Safari */\n      -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n         -moz-user-select: none; /* Firefox */\n          -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none;\n}\n\n.character-display {\n    position: absolute;\n    bottom: 0px;\n    width: 26%;\n}\n\n.character-img {\n    display: block;\n    width: 100%;\n    height: auto;\n}\n\n.dialogue-box {\n    width: 73%;\n\n    position: relative;\n    left: 22%;\n    bottom: 20px;\n    min-height: 78px;\n    padding: 10px;\n    background-color: black;\n    border: 4px solid #0000ff;\n    border-radius: 15px;\n\n    font-family: \"Bookman Old Style\";\n    font-size: 32px;\n    color: white;\n}\n\n.whiteOnBlack {\n    background-color: white !important;\n    color: black !important;\n}\n\n.info {\n    left: 5%;\n    width: 90%;\n}\n\n.blinking {\n    -webkit-animation: blinkingText 1.5s infinite;\n            animation: blinkingText 1.5s infinite;\n}\n\n.shake{\n    -webkit-animation-name: shake;\n            animation-name: shake;\n    -webkit-animation-duration: 0.4s;\n            animation-duration: 0.4s;\n}\n\n.zoom {\n    padding: 50px;\n    transition: -webkit-transform .2s;\n    transition: transform .2s;\n    transition: transform .2s, -webkit-transform .2s;\n    width: 200px;\n    height: 200px;\n    margin: 0 auto;\n}\n\n@-webkit-keyframes shake {\n    from { opacity: 0;}\n    to   { opacity: 1;}\n}\n\n@keyframes shake {\n    from { opacity: 0;}\n    to   { opacity: 1;}\n}\n\n@-webkit-keyframes blinkingText{\n    0% { color: transparent; }\n    50% { color: #FFF; }\n    100% {color: transparent; }\n}\n\n@keyframes blinkingText{\n    0% { color: transparent; }\n    50% { color: #FFF; }\n    100% {color: transparent; }\n}\n\n.blinkingBlack {\n    -webkit-animation: blinkingTextBlack 1.5s infinite;\n            animation: blinkingTextBlack 1.5s infinite;\n}\n\n@-webkit-keyframes blinkingTextBlack{\n    0% { color: transparent; }\n    50% { color: #000; }\n    100% {color: transparent; }\n}\n\n@keyframes blinkingTextBlack{\n    0% { color: transparent; }\n    50% { color: #000; }\n    100% {color: transparent; }\n}\n\n@keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Firefox < 16 */\n\n/* Safari, Chrome and Opera > 12.1 */\n\n@-webkit-keyframes fadein {\n    from { opacity: 0; }\n    to   { opacity: 1; }\n}\n\n/* Internet Explorer */\n\n/* Opera < 12.1 */\n\n.bw {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 4%;\n}\n\n.bw:hover {\n    -webkit-animation: shake 1.1s;\n            animation: shake 1.1s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    visibility: visible;\n    opacity: 1;\n}\n\n.character-img:hover{\n    -webkit-animation: bounce 2.5s;\n            animation: bounce 2.5s;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n}\n\n.dialogue-box:hover {\n    -webkit-animation: bounce 2.5s;\n            animation: bounce 2.5s;\n\n    -webkit-animation-iteration-count: infinite    ;\n\n            animation-iteration-count: infinite    ;\n}\n\n@keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n\n@-webkit-keyframes bounce { \n    0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\n    50% {-webkit-transform: translateY(-10px);transform: translateY(-10px);}\n}\n\n@keyframes bounce { \n    0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\n    50% {-webkit-transform: translateY(-10px);transform: translateY(-10px);}\n} "

/***/ }),

/***/ "./src/app/components/game/dialogue/dialogue.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/game/dialogue/dialogue.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\t<div *ngIf=\"currentCharacter != 'info' && !finished\" class=\"character-display\">\n\t\t<img class=\"character-img\" src=\"{{deploypath}}/assets/images/characters/{{ currentCharacter }}.png\" alt=\"Character image\">\n\t</div>\n\n\t<div class=\"dialogue-box\" [class.info]=\"currentCharacter == 'info'\" [class.whiteOnBlack]=\"stateService.dialogueWhiteOnBlack\" *ngIf=\"!finished\">\n\n\t\t<ng-template #noCharacter> {{ displayedDialogue }} </ng-template>\n\n\t\t<ng-template #hasCharacter> {{ currentCharacter + ': ' + displayedDialogue }} </ng-template>\n\n\t\t<ng-content *ngIf=\"currentCharacter == 'info'; then noCharacter; else hasCharacter\"></ng-content>\n\n\t\t<span [class.blinking]=\"!stateService.dialogueWhiteOnBlack\" [class.blinkingBlack]=\"stateService.dialogueWhiteOnBlack\" *ngIf=\"finishedTyping\">&rArr;</span>\n\n\t\t<img class=\"bw\" id=\"bw\" src=\"{{deploypath}}/assets/images/other/bw.png\" alt=\"\" (click)=\"changeBW()\">\n\n\t</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/game/dialogue/dialogue.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/game/dialogue/dialogue.component.ts ***!
  \****************************************************************/
/*! exports provided: DialogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogueComponent", function() { return DialogueComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialogueComponent = /** @class */ (function () {
    function DialogueComponent(eRef, stateService) {
        this.eRef = eRef;
        this.stateService = stateService;
        this.finishedDialogue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.finished = false;
        this.currentIndex = 0;
        this.currentDialogue = '';
        this.displayedDialogue = '';
        this.finishedTyping = false;
        this.dialogueChar = 0;
        this.dialogueSpeed = 40;
        this.currentCharacter = '';
        this.deploypath = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deploypath;
    }
    // Listen for clicks
    DialogueComponent.prototype.clickout = function (event) {
        this.handleClick(event);
    };
    DialogueComponent.prototype.ngOnInit = function () {
        if (this.dialogue) {
            this.setNextDialogue(this.dialogue[0][0], this.dialogue[0][1]);
        }
        else {
            this.continueStory();
        }
    };
    /**
     * Run when a click is detected
     */
    DialogueComponent.prototype.handleClick = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var idAttr = target.attributes.id;
        if (!(idAttr && idAttr.nodeValue == 'bw') && this.eRef.nativeElement.contains(event.target)) {
            if (!this.finishedTyping) {
                this.skipTyping();
            }
            else if (this.dialogue) {
                this.showProvidedDialogue();
            }
            else {
                this.continueStory();
            }
        }
        else {
            console.log('Click inside the dialogue box.');
        }
    };
    DialogueComponent.prototype.showProvidedDialogue = function () {
        this.currentIndex += 1;
        if (this.currentIndex >= this.dialogue.length) {
            this.endDialogue();
        }
        else {
            this.setNextDialogue(this.dialogue[this.currentIndex][0], this.dialogue[this.currentIndex][1]);
        }
    };
    DialogueComponent.prototype.continueStory = function () {
        var nextDialogue = this.stateService.getNextDialogue();
        this.finishedTyping = false;
        if (!nextDialogue) {
            this.endDialogue();
        }
        else if (nextDialogue['name'] == 'endDialogue') {
            this.finishedDialogue.emit();
        }
        else {
            this.setNextDialogue(nextDialogue['name'], nextDialogue['dialogue']);
        }
    };
    DialogueComponent.prototype.endDialogue = function () {
        this.finishedTyping = true;
        this.finished = true;
        this.finishedDialogue.emit();
    };
    DialogueComponent.prototype.typingText = function () {
        var _this = this;
        if (this.dialogueChar < this.currentDialogue.length) {
            this.displayedDialogue += this.currentDialogue.charAt(this.dialogueChar);
            this.dialogueChar++;
            setTimeout(function () {
                if (!_this.finishedTyping) {
                    _this.typingText();
                }
            }, this.dialogueSpeed);
        }
        else {
            this.finishedTyping = true;
            this.stopDialogueSound(this.currentCharacter);
        }
    };
    DialogueComponent.prototype.skipTyping = function () {
        this.finishedTyping = true;
        this.displayedDialogue = this.currentDialogue;
        this.dialogueChar = this.currentDialogue.length;
        this.stopDialogueSound(this.currentCharacter);
    };
    DialogueComponent.prototype.setNextDialogue = function (character, dialogue) {
        this.currentDialogue = dialogue;
        this.currentCharacter = character;
        this.displayedDialogue = '';
        this.dialogueChar = 0;
        this.typingText();
        this.playDialogueSound(character);
    };
    DialogueComponent.prototype.playDialogueSound = function (character) {
        if (character != 'info') {
            this.stateService.playSound('character', character);
        }
    };
    DialogueComponent.prototype.stopDialogueSound = function (character) {
        if (character != 'info') {
            this.stateService.stopSound('character', character);
        }
    };
    DialogueComponent.prototype.changeBW = function () {
        this.stateService.dialogueWhiteOnBlack = !this.stateService.dialogueWhiteOnBlack;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DialogueComponent.prototype, "dialogue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DialogueComponent.prototype, "finishedDialogue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DialogueComponent.prototype, "clickout", null);
    DialogueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialogue',
            template: __webpack_require__(/*! ./dialogue.component.html */ "./src/app/components/game/dialogue/dialogue.component.html"),
            styles: [__webpack_require__(/*! ./dialogue.component.css */ "./src/app/components/game/dialogue/dialogue.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], DialogueComponent);
    return DialogueComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home *ngIf=\"stateService.state == 'home'\" (play)=\"play($event)\">\n</app-home>\n\n<app-header *ngIf=\"stateService.state != 'home'\"></app-header>\n\n<app-map\n\t*ngIf=\"stateService.state == 'map'\"\n\t(goToLocationEvent)=\"goToLocation($event)\"\n></app-map>\n\n<app-location\n\t*ngIf=\"stateService.state == 'location'\"\n></app-location>\n\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GameComponent = /** @class */ (function () {
    function GameComponent(stateService) {
        this.stateService = stateService;
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.play = function (part) {
        var initialLocation = this.stateService.initialiseGame(part);
        this.goToLocation(initialLocation);
    };
    GameComponent.prototype.goToMap = function () {
        this.stateService.state = 'map';
        console.log('Playing');
    };
    GameComponent.prototype.goToLocation = function (location) {
        this.stateService.state = 'location';
        this.stateService.currentLocation = location;
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/game/header/header.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/game/header/header.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bar {\n    width: calc(100% - 12px);\n    height: 100px;\n    background-color: #b3b6b7;\n    border: 6px solid #21618c;\n}\n\n.empty-header {\n    width: calc(100% - 12px);\n    height: 100px;\n    background-color: black;\n    border: 6px solid black;\n}\n\n.container {\n    display: inline-block;\n    width: 48%;\n    height: calc(100% - 12px);\n    padding: 10px;\n    vertical-align: top;\n    color: black;\n    font-family: Georgia, 'Times New Roman', Times, serif;\n}\n\n.inventory {\n\n}\n\n.item {\n    display: inline-block;\n    margin: 0 25px;\n    background-color: transparent;\n    font-size: 25px;\n    color: black;\n    cursor: pointer;\n}\n\n.not-clickable {\n    cursor: auto !important;\n}\n\n.icon {\n    width: auto;\n    height: 75px;\n}\n\n.current-task {\n\n}\n\n.primary-text {\n    font-weight: 500;\n    font-size: 175%;\n}\n\n.hidden {\n    visibility: hidden;\n}\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n}\n\n/* Tooltip text */\n\n.tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: black;\n    color: #fff;\n    text-align: center;\n    padding: 5px 0;\n    border-radius: 6px;\n\n    /* Position the tooltip text - see examples below! */\n    position: absolute;\n    z-index: 1;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n\n.tooltip:hover .tooltiptext {\n    visibility: visible;\n}\n"

/***/ }),

/***/ "./src/app/components/game/header/header.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/game/header/header.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-bar\" *ngIf=\"stateService.currentLocation != 'intro'\">\n\t<!-- [class.hidden]=\"stateService.currentLocation == 'intro'\" -->\n\n<div class=\"container\">\n\t\n\t<span class=\"inventory primary-text\">\n\t\tInventory\n\t</span>\n\n\t<div class=\"item\" [class.not-clickable]=\"stateService.dialogueActive\" (click)=\"goToMap()\">\n\t\t<div class= \"tooltip\"><img class=\"icon\" src=\"{{deploypath}}/assets/images/inventory/map.png\" alt=\"Map\">\n\t\t\t<span class=\"tooltiptext\">Map</span>\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"stateService.inventory.carrots > 0\" (click)=\"itemClick('carrots')\" class=\"item\">\n\t\t<div class= \"tooltip\"><img class=\"icon\" src=\"{{deploypath}}/assets/images/inventory/carrots.png\" alt=\"Carrots: \">\n\t\t\t<span class=\"tooltiptext\">Gold</span>\n\t\t\t{{ stateService.inventory.carrots }}\n\t\t</div>\n\t</div>\n\t\n\n\t<div *ngIf=\"stateService.inventory.gold > 0\" (click)=\"itemClick('gold')\" class=\"item\">\n\t\t<div class= \"tooltip\"><img class=\"icon\" src=\"{{deploypath}}/assets/images/inventory/gold.png\" alt=\"Gold: \">\n\t\t<span class=\"tooltiptext\">Gold</span>\n\t\t{{ stateService.inventory.gold }}\n\t\t</div>\n\t</div>\n\n\t<div *ngIf=\"stateService.inventory.book > 0\" (click)=\"itemClick('book')\" class=\"item\">\n\t\t<div class= \"tooltip\"><img class=\"icon\" src=\"{{deploypath}}/assets/images/inventory/book.png\" alt=\"SpellBook: \">\n\t\t\t<span class=\"tooltiptext\">SpellBook</span>\n\t\t</div>\n\t</div>\n\n</div>\n\n<div class=\"container\">\n\t<span class=\"current-task primary-text\">\n\t\t{{ stateService.getCurrentTask() }}\n\t</span>\n</div>\n\n</div>\n\n<div class=\"empty-header\" *ngIf=\"stateService.currentLocation == 'intro'\"></div>\n"

/***/ }),

/***/ "./src/app/components/game/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/game/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(stateService) {
        this.stateService = stateService;
        this.deploypath = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].deploypath;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.goToMap = function () {
        this.stateService.goToMap();
    };
    HeaderComponent.prototype.itemClick = function (item) {
        this.stateService.playSound('event', item);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/game/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/game/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/game/location/location.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/game/location/location.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location-background {\n    position: absolute;\n    /* background-color: lightskyblue; */\n    width: 100%;\n    height: calc(100% - 112px);\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n.clickable {\n    z-index: 99;\n    position: absolute;\n    background-color: transparent;\n    /* background-color: red; */\n    cursor: pointer;\n}\n\n.highlighted {\n    background-color: rgba(255,255,255,0);\n    border: 4px solid yellow;\n    border-radius: 10px;\n}\n\n/**\n * Forest\n */\n\n.leaves {\n    top: 62%;\n    left: 25%;\n    width: 70%;\n    height: 24%;\n}\n\n.tree {\n    top: 1%;\n    left: 11%;\n    width: 83%;\n    height: 28%;\n}\n\n/**\n * Town centre\n */\n\n.market {\n    top: 57%;\n    left: 18%;\n    width: 9%;\n    height: 22%;\n}\n\n.lamp {\n    top: 32%;\n    left: 84%;\n    width: 9%;\n    height: 25%;\n}\n\n.clocktower {\n    top: 6%;\n    left: 21%;\n    width: 12%;\n    height: 51%;\n}\n\n.window {\n    top: 7%;\n    left: 68%;\n    width: 12%;\n    height: 71%;\n}\n\n.door {\n    top: 59%;\n    left: 80%;\n    width: 6%;\n    height: 33%;\n}\n\n/**\n * Market\n */\n\n.town {\n    top: 20%;\n    left: 52%;\n    width: 19%;\n    height: 45%;\n}\n\n.newspaper-stand {\n    top: 46%;\n    left: 28%;\n    width: 13%;\n    height: 41%;\n}\n\n.fruit-stand {\n    top: 59%;\n    left: 77%;\n    width: 23%;\n    height: 28%;\n}\n\n/**\n * Lighthouse\n */\n\n.foghorn {\n    top: 1%;\n    left: 37%;\n    width: 17%;\n    height: 32%;\n}\n\n.lighthouseDoor {\n    top: 63%;\n    left: 32%;\n    width: 27%;\n    height: 35%;\n}\n\n.waves {\n    top: 79%;\n    left: 0%;\n    width: 31%;\n    height: 21%;\n}"

/***/ }),

/***/ "./src/app/components/game/location/location.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/game/location/location.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n\tclass=\"location-background\"\n\t[ngStyle]=\"{\n\t\t'background-image': location != 'intro' ? 'url(' + image + ')' : '',\n\t\t'background-color': location == 'intro' ? '#000' : '',\n\t\t'background-size': location == 'forest' ? 'cover' : ''\n\t}\">\n\n\t<ng-container *ngIf=\"location == 'forest'\">\n\n\t\t<div class=\"clickable leaves\" (click)=\"handleBackgroundClick('leaves')\">\n\t\t</div>\n\n\t\t<div class=\"clickable tree\" (click)=\"handleBackgroundClick('tree')\">\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<ng-container *ngIf=\"location == 'town'\">\n\n\t\t<div class=\"clickable market\" (click)=\"handleBackgroundClick('market')\">\n\t\t</div>\n\n\t\t<div class=\"clickable lamp\" (click)=\"handleBackgroundClick('lamp')\">\n\t\t</div>\n\n\t\t<div class=\"clickable clocktower\" (click)=\"handleBackgroundClick('clocktower')\">\n\t\t</div>\n\n\t\t<div class=\"clickable window\" (click)=\"handleBackgroundClick('window')\">\n\t\t</div>\n\n\t\t<div *ngIf=\"stateService.nextLocation != 'market'\" class=\"clickable door\" (click)=\"handleBackgroundClick('door')\">\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<ng-container *ngIf=\"location == 'market'\">\n\n\t\t<div class=\"clickable town\" (click)=\"handleBackgroundClick('town')\">\n\t\t</div>\n\n\t\t<div class=\"clickable newspaper-stand\" (click)=\"handleBackgroundClick('newspaper-stand')\">\n\t\t</div>\n\n\t\t<div class=\"clickable fruit-stand\" (click)=\"handleBackgroundClick('fruit-stand')\">\n\t\t</div>\n\n\t</ng-container>\n\n\n\t<ng-container *ngIf=\"location == 'lighthouse'\">\n\n\t\t<div class=\"clickable foghorn\" (click)=\"handleBackgroundClick('foghorn')\">\n\t\t</div>\n\n\t\t<div *ngIf=\"!stateService.dialogueActive && stateService.nextLocation != 'forest'\" class=\"clickable lighthouseDoor\" (click)=\"handleBackgroundClick('lighthouseDoor')\">\n\t\t</div>\n\n\t\t<div *ngIf=\"!stateService.dialogueActive\" class=\"clickable waves\" (click)=\"handleBackgroundClick('waves')\">\n\t\t</div>\n\n\t</ng-container>\n\t\n\n\t<app-dialogue\n\t\t*ngIf=\"stateService.dialogueActive\"\n\t\t(finishedDialogue)=\"stateService.dialogueActive=false\">\n\t</app-dialogue>\n\n</div>"

/***/ }),

/***/ "./src/app/components/game/location/location.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/game/location/location.component.ts ***!
  \****************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocationComponent = /** @class */ (function () {
    function LocationComponent(stateService) {
        this.stateService = stateService;
        this.deploypath = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].deploypath;
    }
    LocationComponent.prototype.ngOnInit = function () {
        this.location = this.stateService.currentLocation;
        this.image = this.deploypath + '/assets/images/locations/' + this.location + '.png';
        this.stateService.dialogueActive = (this.location == this.stateService.nextLocation);
        this.stateService.playSound('location', this.location);
    };
    LocationComponent.prototype.ngOnDestroy = function () {
        this.stateService.stopSound('location', this.location);
    };
    LocationComponent.prototype.handleBackgroundClick = function (item) {
        switch (this.location) {
            case 'forest':
                this.handleForestClick(item);
                break;
            case 'town':
                this.handleTownClick(item);
                break;
            case 'market':
                this.handleMarketClick(item);
                break;
            case 'lighthouse':
                this.handleLighthouseClick(item);
                break;
        }
    };
    LocationComponent.prototype.handleForestClick = function (item) {
        switch (item) {
            case 'leaves':
            case 'tree':
                this.stateService.playSound('event', item);
                break;
        }
    };
    LocationComponent.prototype.handleTownClick = function (item) {
        switch (item) {
            case 'market':
                if (!this.stateService.dialogueActive) {
                    this.stateService.changeLocation('market');
                }
                break;
            case 'door':
                if (!this.stateService.dialogueActive && this.stateService.nextLocation == 'town') {
                    this.stateService.dialogueActive = true;
                }
                break;
            case 'lamp':
            case 'clocktower':
            case 'window':
                this.stateService.playSound('event', item);
                break;
        }
    };
    LocationComponent.prototype.handleMarketClick = function (item) {
        switch (item) {
            case 'town':
                if (!this.stateService.dialogueActive) {
                    this.stateService.changeLocation('town');
                }
                break;
            case 'newspaper-stand':
            case 'fruit-stand':
                this.stateService.playSound('event', item);
                break;
        }
    };
    LocationComponent.prototype.handleLighthouseClick = function (item) {
        switch (item) {
            case 'foghorn':
            case 'waves':
                this.stateService.playSound('event', item);
                break;
            case 'lighthouseDoor':
                if (!this.stateService.dialogueActive && this.stateService.nextLocation == 'lighthouse') {
                    this.stateService.dialogueActive = true;
                }
                break;
        }
    };
    LocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! ./location.component.html */ "./src/app/components/game/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.css */ "./src/app/components/game/location/location.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/components/game/map/map.component.css":
/*!*******************************************************!*\
  !*** ./src/app/components/game/map/map.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bold {\n    font-weight: bold;\n}\n.map-background {\n    position: absolute;\n    /* background-color: lightgreen; */\n    width: 100%;\n    height: calc(100% - 112px);\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.location {\n    position: absolute;\n    /* background-color: red; */\n    background-color: transparent;\n    cursor: pointer;\n}\n.forest {\n    top: 7%;\n    left: 27%;\n    width: 34%;\n    height: 34%;\n}\n.town {\n    top: 41%;\n    left: 48%;\n    width: 32%;\n    height: 24%;\n}\n.lighthouse {\n    top: 65%;\n    left: 27%;\n    width: 28%;\n    height: 26%;\n}\n\n"

/***/ }),

/***/ "./src/app/components/game/map/map.component.html":
/*!********************************************************!*\
  !*** ./src/app/components/game/map/map.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-background\" [style.background-image]=\"'url(' + image + ')'\">\n\t<div class=\"location forest\" (click)=\"handleLocationClick('forest')\">\n\t</div>\n\t\n\t<div class=\"location town\" (click)=\"handleLocationClick('town')\">\n\t</div>\n\t\n\t<div class=\"location lighthouse\" (click)=\"handleLocationClick('lighthouse')\">\n\t</div>\n\t\n\t<b><app-dialogue \n\t\t*ngIf=\"showCantAccessLocationDialogue\"\n\t\t[dialogue]=\"cantAccessLocationDialogue\"\n\t\t(finishedDialogue)=\"showCantAccessLocationDialogue = false\">\n\t</app-dialogue>\n\t</b>\n\n\n\t<b><app-dialogue \n\t\t*ngIf=\"showLocationUnlockDialogue\"\n\t\t[dialogue]=\"locationUnlockDialogue\"\n\t\t(finishedDialogue)=\"goToClickedLocation()\">\n\t</app-dialogue>\n\t</b>\n</div>\n"

/***/ }),

/***/ "./src/app/components/game/map/map.component.ts":
/*!******************************************************!*\
  !*** ./src/app/components/game/map/map.component.ts ***!
  \******************************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent(stateService) {
        this.stateService = stateService;
        this.goToLocationEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deploypath = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].deploypath;
        this.showCantAccessLocationDialogue = false;
        this.cantAccessLocationDialogue = [
            ['Kiku', 'Focus! DON\'T go to there now! We should aim on our mission.']
        ];
        this.showLocationUnlockDialogue = false;
        this.locationUnlockDialogue = [['Kiku', 'dab']];
        this.clickedLocation = '';
    }
    MapComponent.prototype.ngOnInit = function () {
        this.image = this.deploypath + '/assets/images/locations/map.png';
    };
    /**
     * Clicking on a location will either take the player to the location,
     * or will trigger a companion dialogue.
     */
    MapComponent.prototype.handleLocationClick = function (location) {
        var cost = this.stateService.costOfLocation(location);
        this.clickedLocation = location;
        if (cost == 0) {
            // take player to location
            this.goToLocationEvent.emit(location);
        }
        else if (cost > 0) {
            // trade carrots to unlock
            if (this.stateService.unlockLocation(location)) {
                this.locationUnlockDialogue = [
                    ['Kiku', 'We fed our horse ' + cost + ' carrots!']
                ];
                this.showLocationUnlockDialogue = true;
            }
            else {
                this.showCantAccessLocationDialogue = true;
            }
        }
        else {
            // player can't access location
            this.showCantAccessLocationDialogue = true;
        }
    };
    MapComponent.prototype.goToClickedLocation = function () {
        this.goToLocationEvent.emit(this.clickedLocation);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MapComponent.prototype, "goToLocationEvent", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/components/game/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.css */ "./src/app/components/game/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    display: block;\n    min-width: 100%;\n    min-height: 100vh;\n    background-color: lightgrey;\n    position: absolute;\n}\n\n.content {\n    display: block;\n    text-align: center;\n    width: 80%;\n    margin: 0 auto;\n    color: black;\n}\n\n.logo-container {\n    display: block;\n    width: 350px;\n    background-color: white;\n    border-radius: 10px;\n    margin: 20px auto;\n    padding: 10px;\n}\n\n.play-button {\n    width: 30%;\n    height: 30px;\n    margin: 30px auto;\n    display: block;\n}\n\n.task {\n    display: block;\n    width: 600px;\n    background-color: white;\n    border-radius: 10px;\n    margin: 40px auto;\n    padding: 10px;\n    font-size: 20px;\n}\n\n.licence {\n    position: absolute;\n    bottom: 10px;\n\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n    transform: translateX(-50%)\n}\n\n.play-button:hover {\n    /* Start the shake animation and make the animation last for 0.5 seconds */\n    -webkit-animation: shake 1s;\n            animation: shake 1s;\n\n    /* When the animation is finished, start again */\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}\n\n@keyframes shake {\n    0% { -webkit-transform: translate(1px, 1px) rotate(0deg); transform: translate(1px, 1px) rotate(0deg); }\n    10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); transform: translate(-1px, -2px) rotate(-1deg); }\n    20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); transform: translate(-3px, 0px) rotate(1deg); }\n    30% { -webkit-transform: translate(3px, 2px) rotate(0deg); transform: translate(3px, 2px) rotate(0deg); }\n    40% { -webkit-transform: translate(1px, -1px) rotate(1deg); transform: translate(1px, -1px) rotate(1deg); }\n    50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); transform: translate(-1px, 2px) rotate(-1deg); }\n    60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); transform: translate(-3px, 1px) rotate(0deg); }\n    70% { -webkit-transform: translate(3px, 1px) rotate(-1deg); transform: translate(3px, 1px) rotate(-1deg); }\n    80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); transform: translate(-1px, -1px) rotate(1deg); }\n    90% { -webkit-transform: translate(1px, 2px) rotate(0deg); transform: translate(1px, 2px) rotate(0deg); }\n    100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); transform: translate(1px, -2px) rotate(-1deg); }\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"content\">\n\t\t<h1>\n\t\t\tPDP Game\n\t\t</h1>\n\t\t<br>\n\t\t<h2>\n\t\t\tPlay in Fullscreen and use headphone for the best experience (Press F11)\n\t\t</h2>\n\t\t\n\t\t<label for=\"password-input\">Passphrase: </label>\n\t\t<input type=\"text\" id=\"password-input\" [(ngModel)]=\"password\">\n\t\n\t\t<button class=\"play-button\" (click)=\"onPlayClick(1)\">\n\t\t\t<b>Part 1</b>\n\t\t</button>\n\t\n\t\t<button class=\"play-button\" (click)=\"onPlayClick(2)\">\n\t\t\t<b>Part 2</b>\n\t\t</button>\n\t\n\t\t<button class=\"play-button\" (click)=\"onPlayClick(3)\">\n\t\t\t<b>Part 3</b>\n\t\t</button>\n\t\n\t\t<button class=\"play-button\" (click)=\"onPlayClick(4)\">\n\t\t\t<b>Part 4</b>\n\t\t</button>\n\n\n\t\t<div class=\"task\" *ngIf=\"stateService.finishedPart\">\n\t\t\tYour next task: {{ stateService.taskText }}\n\t\t</div>\n\n\t\t<div class=\"licence\">\n\t\t\tExcept where otherwise noted, graphical content on this site is licensed under a Creative Commons Attribution 4.0 International license\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var src_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/state.service */ "./src/app/services/state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(mainService, stateService) {
        this.mainService = mainService;
        this.stateService = stateService;
        this.play = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.password = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        if (this.stateService.dialogueIndex == 0) { // first load
            this.stateService.loadSounds();
        }
        else { // end of game
            this.end();
        }
    };
    HomeComponent.prototype.onPlayClick = function (part) {
        this.play.emit(part); // TODO/NOTE: this disables need for password
        // this.mainService.auth(part, this.password).subscribe(
        // 	(data: any) => {
        // 		console.log(data.data);
        // 		if (data.authed) {
        // 			this.play.emit(part);
        // 		} else {
        // 			alert('Your password is not recognised for part ' + part + '.');
        // 		}
        // 	},
        // 	error => {
        // 		console.log(error);
        // 	}
        // );
    };
    HomeComponent.prototype.end = function () {
        this.mainService.end().subscribe(function (data) {
            console.log(data.data);
        }, function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HomeComponent.prototype, "play", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"],
            src_app_services_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        // public API_URL = 'http://pdp.test';
        this.API_URL = 'http://people.bath.ac.uk/ph471/FYP/';
        this.authUrl = this.API_URL + 'auth/auth.php';
        this.endUrl = this.API_URL + 'auth/end.php';
    }
    MainService.prototype.auth = function (part, password) {
        this.part = part;
        this.password = password;
        var data = JSON.stringify({ part: part, password: password });
        return this.http.post(this.authUrl, data);
    };
    MainService.prototype.end = function () {
        var data = JSON.stringify({ part: this.part, password: this.password });
        return this.http.post(this.endUrl, data);
    };
    MainService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/services/state.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/state.service.ts ***!
  \*******************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StateService = /** @class */ (function () {
    function StateService() {
        this.state = 'home'; // keep as 'home'. Can also be 'map' or 'location
        this.currentTask = 0;
        this.currentLocation = '';
        this.dialogueIndex = 0;
        this.nextLocation = '';
        this.dialogueActive = false;
        this.dialogueWhiteOnBlack = true;
        this.finishedPart = false;
        this.taskText = '';
        this.inventory = {
            carrots: 0,
            gold: 0,
            book: 0
        };
        this.locations = {
            forest: { name: 'Forest', cost: 0 },
            town: { name: 'Town Centre', cost: 3 },
            market: { name: 'Town Market', cost: 0 },
            lighthouse: { name: 'Lighthouse', cost: 7 },
        };
        this.tasks = [
            { location: 'forest', description: 'Objective: Find your way through the FOREST towards the town of Arkala' },
            { location: 'town', description: 'Objective: Disccover more mystery in the TOWN centre' },
            { location: 'town', description: 'Objective: Knock on the DOOR to find if anyone\'s home' },
            { location: 'town', description: 'Objective: Explore your surroundings to find the MARKET and fetch some CARROTS for Julissa' },
            { location: 'town', description: 'Objective: Bring CARROTS back to Julissa' },
            { location: 'lighthouse', description: 'Objective: Visit the wizard in the LIGHTHOUSE' },
            { location: 'lighthouse', description: 'Objective: Knock on the LIGHTHOUSE DOOR' },
            { location: 'forest', description: 'Objective: Find the SPELL BOOK from Olah and bring it back to Omonar' },
            { location: 'lighthouse', description: 'Objective: Assist the WIZZARD with his literature review' },
            { location: 'lighthouse', description: '' },
        ];
        this.characters = [
            'Kiku', 'Olah', 'Julissa', 'Shopkeeper', 'Omonar'
        ];
        this.events = [
            'info', 'snore', 'map', 'carrots', 'gold', 'book', 'tree', 'leaves',
            'lamp', 'clocktower', 'window', 'knock',
            'achievement', 'menu-select', 'spell', 'shock',
            'computer', 'newspaper-stand', 'fruit-stand', 'foghorn', 'waves',
        ];
        this.dialogueSounds = [];
        this.locationSounds = [];
        this.eventSounds = [];
        /**
         * Game events are structured as follows:
         *  - Event with name 'task' indicates that the next task should be shown
         *  - Event with name 'info' indicates dialogue from no particular character
         *  - Event with name 'inventory' indicates adding/removing from inventory
         *  - Event with name 'map' indicates being taken back to map. Also defines the next location in the story
         *  - Event with name 'location' indicates changing location without going to the map
         *  - Other events are simply dialogue from a character
         */
        // Dialogue and events for each part
        this.parts = [
            {
                initialLocation: 'intro',
                carrots: 0,
                gold: 0,
                book: 0,
                unlockedLocations: [],
                currentTask: 0,
                dialogue: [
                    { name: 'event', item: 'snore' },
                    { name: 'Kiku', dialogue: 'wakey-wakey....' },
                    { name: 'Kiku', dialogue: 'Hey!! Wake up.' },
                    { name: 'Kiku', dialogue: 'Great! you’re finally awake!' },
                    { name: 'Kiku', dialogue: 'You’ve been asleep for about 13 hours!! I guess knights really do love a good nap huh.' },
                    { name: 'Kiku', dialogue: 'Sorry, where are my manners... I’m Kiku, one of the king’s trusted faries.' },
                    { name: 'Kiku', dialogue: 'I’m sure you are aware that the residents of Arkala, the town not too far North from here, has gone silent. Nobody has heard a word from any of its residents in weeks.' },
                    { name: 'Kiku', dialogue: 'There is a rumor that the town has been cursed, but we do not know much more than that.' },
                    { name: 'Kiku', dialogue: 'So the king has decided to step in, to find the reason of this mysterious silence, and commond you to explore what’s going on...' },
                    { name: 'Kiku', dialogue: '... and assigned me as your partner! I will guide you.' },
                    { name: 'Kiku', dialogue: 'I’ll give you some time to prepare, we will begin our journey on horseback as soon as possible!' },
                    { name: 'Kiku', dialogue: 'And don’t you dare fall back sleep again...' },
                    { name: 'info', dialogue: 'Achievement completed: Nap is Over.' },
                    { name: 'map', nextLocation: 'forest' },
                    { name: 'info', dialogue: 'Achievement completed: Welcome to the forest' },
                    { name: 'Kiku', dialogue: 'This forest is so eerie... I feel like we’re being watched.' },
                    { name: 'Olah', dialogue: 'Hello There!' },
                    { name: 'Kiku', dialogue: 'Ah! Who was that. I told you we weren’t alone.' },
                    { name: 'Olah', dialogue: 'Me! Over here!' },
                    { name: 'Olah', dialogue: 'My name is Olah, I am a hermit of these woods.' },
                    { name: 'Olah', dialogue: 'I haven’t seen anyone walk down this path for quite some time... days, possibly even weeks' },
                    { name: 'Olah', dialogue: 'Well, I’m glad to see some new faces here.' },
                    { name: 'Kiku', dialogue: 'You must be so lonely out here by yourself...' },
                    { name: 'Kiku', dialogue: 'We have travelled from the kingdom of Orilon. No one has heard from Arkala for weeks, so we\'re on a mission to investigate and help.' },
                    { name: 'Kiku', dialogue: 'You wouldn’t happen to know anything about this mystery, would you?' },
                    { name: 'Olah', dialogue: 'Hmmm... Now that me think about it, the last person I met in these woods mentioned a rumour of a curse placed over Arkala by some evil witch.' },
                    { name: 'Olah', dialogue: 'Since then, no one has passed through this forest.' },
                    { name: 'Olah', dialogue: 'I assume this curse is preventing anyone from leaving the town, which would explain the silence.' },
                    { name: 'Kiku', dialogue: 'How terrible. That would explain why the news never made it to Orilon.' },
                    { name: 'Kiku', dialogue: 'Do you know where we can find out more about this witch?' },
                    { name: 'Olah', dialogue: 'Oh... no, sorry. Although she headed in the direction of the town center up ahead.' },
                    { name: 'Olah', dialogue: 'I’m sure somebody will be able to give you some useful advice.' },
                    { name: 'Kiku', dialogue: 'Thanks. Let’s make our way over to the town centre then.' },
                    { name: 'task' },
                    { name: 'info', dialogue: 'Your horse seems uninterested in moving on.' },
                    { name: 'Kiku', dialogue: 'Oh dear, don’t tell me we were assigned with the most stubborn horse in the Kingdom.' },
                    { name: 'Kiku', dialogue: 'He will only take us to locations he is familiar with...' },
                    { name: 'Kiku', dialogue: '... unless you feed him enough carrots. Cheeky mare!' },
                    { name: 'Kiku', dialogue: 'But we have no carrots...' },
                    { name: 'Olah', dialogue: 'Don’t worry, I’ll give you the rest of mine if it means you lift this horrid curse.' },
                    { name: 'inventory', item: 'carrots', modify: 5 },
                    { name: 'info', dialogue: 'You received 5 carrots' },
                    { name: 'Kiku', dialogue: 'Thanks, hermit. We’ll head to the town.' },
                    { name: 'map', nextLocation: 'town' },
                    { name: 'Kiku', dialogue: 'Wow, it is pretty gloomy here. It’s like a ghost town. Where is everyone?' },
                    { name: 'Kiku', dialogue: 'This is so creepy. Where have these people gone? Is anyone at home? ' },
                    { name: 'Kiku', dialogue: 'Hey, why don’t we knock on some houses? Maybe they could tell us more about what’s going on here.' },
                    { name: 'Kiku', dialogue: 'Let’s try this house. I hope someone is at home.' },
                    { name: 'task' },
                    { name: 'info', dialogue: 'Knock on the door to see if anyone is at home.' },
                    { name: 'endDialogue', location: 'town' },
                    { name: 'info', dialogue: '*Knock knock*', sound: 'knock...' },
                    { name: 'Julissa', dialogue: 'Oh, hey! you two!' },
                    { name: 'Julissa', dialogue: 'I’m not sure if I’ve seen your faces around here before. Are you from somewhere else?' },
                    { name: 'Kiku', dialogue: 'Sorry to bother you. We have travelled from Orilon to restore peace back to this town.' },
                    { name: 'Kiku', dialogue: 'We were wondering if you could enlighten us as to what’s causing this mysterious gloom that is holding your town captive.' },
                    { name: 'Kiku', dialogue: 'On our way we met a hermit in the woods, he mentioned that a witch had taken over the town. Is this true?' },
                    { name: 'Julissa', dialogue: 'You heard correct, although I wouldn’t believe everything that man said.' },
                    { name: 'Julissa', dialogue: 'He has a strange ring with him... and smell...' },
                    { name: 'Julissa', dialogue: 'Anyway, it was the witch who has caused the silence. She has taken control of the town and has cast a curse, bringing gloom and illness to all around.' },
                    { name: 'Julissa', dialogue: 'Nobody could leave the house anymore. This town has been reduced to nothing more than a prison.' },
                    { name: 'Kiku', dialogue: 'So the rumour of a witch is true...' },
                    { name: 'Kiku', dialogue: 'We will do everything we could, whatever it takes to find this witch and free this town from her curse.' },
                    { name: 'Julissa', dialogue: 'I do hope so... I’m not sure how much longer we can live like this.' },
                    { name: 'Julissa', dialogue: 'I’ve heard that the shops in the market only have enough stock to last us a few more days, because the witch has also contaminated our farms.' },
                    { name: 'Kiku', dialogue: 'That is so sorry to hear. Do you think they might still have any carrots left in that shop?' },
                    { name: 'Kiku', dialogue: 'Our horse here is stubborn and will only take us to where we want to go if we feed him, so we will need to stock up some carrots.' },
                    { name: 'Julissa', dialogue: 'Yes I do believe you should be in luck, although I wouldn’t wait around as everyone will be stocking up on their final supplies.' },
                    { name: 'Kiku', dialogue: 'Great, let’s stock up on some carrots before they run out then.' },
                    { name: 'Kiku', dialogue: 'Hey, knight, you did bring some COINS with you, didn\'t you?' },
                    { name: 'event', item: 'shock' },
                    { name: 'Kiku', dialogue: 'oh...\ No?!?' },
                    { name: 'Kiku', dialogue: 'I thought I told you to prepare!' },
                    { name: 'Julissa', dialogue: 'Tell you what, I am also in need of some carrots for tonight’s dinner.' },
                    { name: 'Julissa', dialogue: 'I can hire you to go to the market and fetch me a bunch of carrots then I will let you keep half of them.' },
                    { name: 'Julissa', dialogue: 'everyone should avoid leave their house.' },
                    { name: 'Kiku', dialogue: 'That would be a massive help, thank you.' },
                    { name: 'task' },
                    { name: 'inventory', item: 'gold', modify: 5 },
                    { name: 'info', dialogue: 'You received 5 gold.' },
                    { name: 'info', dialogue: 'Explore your surroundings to reach the market.' },
                    { name: 'endDialogue', location: 'market' },
                    { name: 'Shopkeeper', dialogue: 'Hi there.' },
                    { name: 'Kiku', dialogue: 'Hello, We would like to buy some carrots please. How many have you got left?' },
                    { name: 'Shopkeeper', dialogue: 'I have only got the last bunch left. How about 10 carrots for 8 gold?' },
                    { name: 'Kiku', dialogue: 'No... We only have 5 gold left.. Any chance we could get a discount?' },
                    { name: 'Kiku', dialogue: 'It’s very important that we buy some carrots. We’re on a quest to lift the curse from the witch to this town and run out of carrots for our horse.' },
                    { name: 'Shopkeeper', dialogue: 'Hmmm...' },
                    { name: 'Shopkeeper', dialogue: 'I can offer you a deal : But only if you can complete this task for me' },
                    { name: 'Shopkeeper', dialogue: '... and I\'m having trouble promoting my new line of organic carrots.' },
                    { name: 'Shopkeeper', dialogue: 'I guess the witch put a stop to all and any interesting news-worthy happenings...' },
                    { name: 'Shopkeeper', dialogue: 'How about you two present me with some ideas for an interesting headline for my news stand.' },
                    { name: 'Shopkeeper', dialogue: 'My customers must be bored to read the same headline on my news stand every day...' },
                    { name: 'Shopkeeper', dialogue: '... and I’m sure both of you together could come up with something exciting!' },
                    { name: 'Shopkeeper', dialogue: 'In return I can offer you a discount. 10 carrots for 5 gold.' },
                    { name: 'Shopkeeper', dialogue: 'Deal?' },
                    { name: 'Kiku', dialogue: 'That sounds good!' },
                    { name: 'info', dialogue: 'Time to develop your presentation skills. Complete the following task:' },
                    { name: 'info', dialogue: 'Prepare a 3-slide presentation on the history of carrots, and recent news in the carrot industry.' },
                    { name: 'info', dialogue: 'End of part 1.' },
                    { name: 'endPart', part: '1' }
                ]
            },
            {
                initialLocation: 'market',
                carrots: 2,
                gold: 5,
                book: 0,
                unlockedLocations: ['forest', 'town'],
                currentTask: 3,
                dialogue: [
                    { name: 'event', item: 'achievement' },
                    { name: 'Shopkeeper', dialogue: 'Thanks, you two. You two came up with some really interesting ideas and brilliant presentation.' },
                    { name: 'Shopkeeper', dialogue: 'I’ll be sure to put one of these on my news stand. Good job!' },
                    { name: 'Shopkeeper', dialogue: 'As promised, here’s your carrots.' },
                    { name: 'Kiku', dialogue: 'Great! Glad you liked our ideas.' },
                    { name: 'inventory', item: 'carrots', modify: 10 },
                    { name: 'inventory', item: 'gold', modify: -5 },
                    { name: 'info', dialogue: 'You spent 5 gold and received 10 carrots.' },
                    { name: 'Shopkeeper', dialogue: 'And while you were giving your presentation, I remembered something that might help you in your quest.' },
                    { name: 'Shopkeeper', dialogue: 'There is a wizard who lives in the lighthouse not too far South from here. Rumour has it that he is preparing some kind of spell to banish the witch.' },
                    { name: 'Shopkeeper', dialogue: 'It might be worth  for you to visit him.' },
                    { name: 'Kiku', dialogue: 'Thank you for that, we’ll be sure to drop by to see what he’s up to.' },
                    { name: 'task' },
                    { name: 'Kiku', dialogue: 'We will be on our way.' },
                    { name: 'Shopkeeper', dialogue: 'Good luck!' },
                    { name: 'info', dialogue: 'Head down to the market and back to Julissa.' },
                    { name: 'endDialogue', location: 'town' },
                    { name: 'Julissa', dialogue: 'Oh you’re back! What took you so long?' },
                    { name: 'Kiku', dialogue: 'We got caught up in a conversation with the shopkeeper.' },
                    { name: 'Julissa', dialogue: 'Of course. It can be easy to get lost in conversation with that man sometimes.' },
                    { name: 'Julissa', dialogue: 'Anyway, here’s your half. You got me the perfect amount of carrots that I need for dinner. Thank you for helping me out.' },
                    { name: 'inventory', item: 'carrots', modify: -5 },
                    { name: 'Kiku', dialogue: 'No problem. We should have enough carrots by now for us to continue in our quest.' },
                    { name: 'task' },
                    { name: 'Kiku', dialogue: 'That was glad to meet you, Julissa.' },
                    { name: 'Julissa', dialogue: 'See you later!' },
                    { name: 'map', nextLocation: 'lighthouse' },
                    { name: 'Kiku', dialogue: 'Well, here we are.' },
                    { name: 'Kiku', dialogue: 'Let’s hope that the wizard has some idea of what to do.' },
                    { name: 'task' },
                    { name: 'info', dialogue: 'Knock on the wizard\'s door.' },
                    { name: 'endDialogue', location: 'lighthouse' },
                    { name: 'event', item: 'knock' },
                    { name: 'info', dialogue: '*Knock knock*' },
                    { name: 'Omonar', dialogue: 'Evening. What’s your purpose here?' },
                    { name: 'Kiku', dialogue: 'We have been sent by the king of Orilon on a quest to restore peace to the town of Arkala.' },
                    { name: 'Kiku', dialogue: 'We have heard that you seem to have an idea of how to defeat the witch of this land. Is this true?' },
                    { name: 'Omonar', dialogue: 'It is. I have been working on a spell for the past two weeks, and it is almost completed.' },
                    { name: 'Omonar', dialogue: 'However I am missing a book from my collection with some key magic on how to complete my spell.' },
                    { name: 'Omonar', dialogue: 'I can not complete the spell without that book, how terribly annoying.' },
                    { name: 'Omonar', dialogue: 'I believe the last time I remember seeing this book was with my old wizard partner, Olah...' },
                    { name: 'Omonar', dialogue: 'Unfortunately I haven’t seen Olah in almost 20 years and have no clue where he might be.' },
                    { name: 'Kiku', dialogue: 'Wait, we met an Olah in the forest not too long ago!' },
                    { name: 'Kiku', dialogue: 'Sounds like he has been living in the forest for quite long time. He definitely looked like he could be an ex wizard.' },
                    { name: 'Omonar', dialogue: 'Goodness me, I have been searching for Olah for far too long.' },
                    { name: 'Omonar', dialogue: 'He always talked about his plans for becoming a hermit but I never thought he would actually become one.' },
                    { name: 'Omonar', dialogue: 'Anyway, would you two be willing to do me a favour?' },
                    { name: 'Omonar', dialogue: 'Go find Olah in that forest and ask if he still possesses the book I need.' },
                    { name: 'task' },
                    { name: 'Omonar', dialogue: 'He will know which one I am after. We studied it almost every day in the past.' },
                    { name: 'Kiku', dialogue: 'Alright, we’ll go see if he has your book.' },
                    { name: 'map', nextLocation: 'forest' },
                    { name: 'Kiku', dialogue: 'Olah, are you here?' },
                    { name: 'event', item: 'computer' },
                    { name: 'Olah', dialogue: 'Hello! You’ve caught me in the middle of writing up my expenses in a spreadsheet...' },
                    { name: 'Olah', dialogue: 'You two were here not too long ago, no? Have you already saved Arkala? What great news!' },
                    { name: 'Kiku', dialogue: 'Not quite yet, hermit. We met an old wizard called Omonar up at the lighthouse.' },
                    { name: 'Kiku', dialogue: 'You were right about the witch. She has cursed Arkala and turned it into a prison. But Omonar has a plan to cast a spell on her in order to banish her forever!' },
                    { name: 'Olah', dialogue: 'Omonar? That name rings a bell...' },
                    { name: 'Kiku', dialogue: 'He said you two were partners, and that you might have a book that could be the key of saving Arkala.' },
                    { name: 'Olah', dialogue: 'oh, yeah... That’s right!' },
                    { name: 'Olah', dialogue: 'I remember now! We used to do all sorts of wizardry together...' },
                    { name: 'Olah', dialogue: '... but I eventually felt tired of being a wizard and decided to retire. So here I am, and took some of my favourite spell books with me a souvenir.' },
                    { name: 'Olah', dialogue: 'I’m glad to hear he is alive and well though.' },
                    { name: 'Olah', dialogue: 'He is probably searching for this fantastic book here. We used to study it all the time together.' },
                    { name: 'Olah', dialogue: 'Tell you what. Would you mind giving me a helping hand to write up this excel spreadsheet?' },
                    { name: 'Olah', dialogue: 'I\'m trying to calculate my expenses for the last quarter. Being a hermit is surprisingly expensive.' },
                    { name: 'Olah', dialogue: 'I’ve been struggling with it all day. In return I’ll give you the spell book that Omonar is after.' },
                    { name: 'info', dialogue: 'Time to develop your Excel spreadsheet skills. Complete the following task:' },
                    { name: 'info', dialogue: 'Complete the provided Excel Exercise worksheet as best you can.' },
                    { name: 'info', dialogue: 'End of part 2.' },
                    { name: 'endPart', part: '2' }
                ]
            },
            {
                initialLocation: 'forest',
                carrots: 0,
                gold: 0,
                book: 0,
                unlockedLocations: ['forest', 'town', 'lighthouse'],
                currentTask: 7,
                dialogue: [
                    { name: 'event', item: 'achievement' },
                    { name: 'Olah', dialogue: 'My expenses! They have never looked so magnificent.' },
                    { name: 'Olah', dialogue: 'Thanks for your help. Here’s the book you’re after.' },
                    { name: 'inventory', item: 'book', modify: 1 },
                    { name: 'info', dialogue: 'You received the spell book.' },
                    { name: 'Olah', dialogue: 'It’s all about the logic and semantics of spells and advanced wizardry complexity theory.' },
                    { name: 'Olah', dialogue: 'You should give it a read on your travels, it’s a good read.' },
                    { name: 'Kiku', dialogue: 'I think we’ll pass on that one, thanks.' },
                    { name: 'Kiku', dialogue: 'Let’s bring this back to Omonar right away. You might just have saved this town!' },
                    { name: 'Olah', dialogue: 'Say hi from me when you see him again.' },
                    { name: 'map', nextLocation: 'lighthouse' },
                    { name: 'Omonar', dialogue: 'You have returned! Did you find the book that I was after?' },
                    { name: 'Kiku', dialogue: 'I think so. Olah seemed to know exactly which book you were talking about.' },
                    { name: 'Kiku', dialogue: 'Here it is.' },
                    { name: 'task' },
                    { name: 'inventory', item: 'book', modify: -1 },
                    { name: 'info', dialogue: 'You gave Omonar the spell book.' },
                    { name: 'Omonar', dialogue: 'That’s the one. I have some very fond memories of this book.' },
                    { name: 'Omonar', dialogue: 'Now I think I have all the resources I need to complete my spell.' },
                    { name: 'Omonar', dialogue: 'It will however take me some time to do so, as I must cross-reference this book with the rest of my library.' },
                    { name: 'Omonar', dialogue: 'A famous wizard once critiqued the spells in this book, and knew just the trick to pull them off...' },
                    { name: 'Omonar', dialogue: '... but I have since lost his review, so I\'ll need to read it again and write my own summary.' },
                    { name: 'Omonar', dialogue: 'Could you help me critically review this book?' },
                    { name: 'Kiku', dialogue: 'I wish I had listened in my magic classes...' },
                    { name: 'info', dialogue: 'Time to develop your critical review skills. Complete the following task:' },
                    { name: 'info', dialogue: 'Write a 2-paragraph critical review on the provided Harry Potter extract.' },
                    { name: 'info', dialogue: 'End of part 3.' },
                    { name: 'endPart', part: '3' }
                ]
            },
            {
                initialLocation: 'lighthouse',
                carrots: 0,
                gold: 0,
                book: 0,
                unlockedLocations: ['forest', 'town', 'lighthouse'],
                currentTask: 5,
                dialogue: [
                    { name: 'event', item: 'achievement' },
                    { name: 'Omonar', dialogue: 'Having read through your literature review, I have finally constructed my spell!' },
                    { name: 'Omonar', dialogue: 'This could have taken days with only one pair of hands, so thank you for your help.' },
                    { name: 'Kiku', dialogue: 'We do our best.' },
                    { name: 'Omonar', dialogue: 'The time has finally come to restore peace to my beloved town. Here it goes...' },
                    { name: 'Omonar', dialogue: 'Lumergio stupectus... Levasi Evicum... Illumia Demigeo...' },
                    { name: 'event', item: 'spell' },
                    { name: 'Omonar', dialogue: 'ABRA-CA-DABRA!!!' },
                    { name: 'info', dialogue: 'You feel a shudder in the ground.' },
                    { name: 'Kiku', dialogue: 'Wow, I never knew abracadabra was a real spell used in wizardry.' },
                    { name: 'Omonar', dialogue: 'It isn’t, really. It’s mostly used for dramatic effect.' },
                    { name: 'Omonar', dialogue: 'But, if my calculations were correct...' },
                    { name: 'Omonar', dialogue: '... peace has been restored in Arkala at last! What a great day.' },
                    { name: 'Achievement', dialogue: 'Hero of Arkala.' },
                    { name: 'info', dialogue: 'End of part 4.' },
                    { name: 'info', dialogue: 'Thanks for playing. Hopefully you learnt some useful skills.', sound: 'Applause' },
                    { name: 'endPart', part: '4' }
                ]
            }
        ];
    }
    /**
     * Set the state variables for the game depending on which part we're playing
     * @param part 1, 2, 3 or 4
     */
    StateService.prototype.initialiseGame = function (part) {
        this.currentPartIndex = part - 1;
        var partData = this.parts[this.currentPartIndex];
        this.inventory.carrots = partData['carrots'];
        this.inventory.gold = partData['gold'];
        this.inventory.book = partData['book'];
        this.currentTask = partData['currentTask'];
        this.nextLocation = partData['initialLocation'];
        this.dialogueIndex = 0;
        for (var i = 0; i < partData['unlockedLocations'].length; i++) {
            this.locations[partData['unlockedLocations'][i]].cost = 0;
        }
        return partData['initialLocation'];
        // this.SKIPSTORY(65);
        // return 'town';
    };
    /**
     * Method for debugging. Skip ahead in the dialogue to avoid clicking too many times.
     * @param number Number of dialogue skips
     */
    StateService.prototype.SKIPSTORY = function (number) {
        for (var i = 0; i < number; i++) {
            this.getNextDialogue();
        }
    };
    /**
     * Load all sound files to be used
     */
    StateService.prototype.loadSounds = function () {
        for (var character in this.characters) {
            var charSound = new Audio();
            var thisCharacter = this.characters[character];
            charSound.src = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deploypath + '/assets/audio/dialogue/' + thisCharacter + '.ogg';
            charSound.loop = true;
            charSound.load();
            this.dialogueSounds[thisCharacter] = charSound;
        }
        for (var location_1 in this.locations) {
            var locationSound = new Audio();
            locationSound.src = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deploypath + '/assets/audio/backgrounds/' + location_1 + '.ogg';
            locationSound.loop = true;
            locationSound.load();
            this.locationSounds[location_1] = locationSound;
        }
        for (var event_1 in this.events) {
            var eventSound = new Audio();
            var thisEvent = this.events[event_1];
            eventSound.src = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].deploypath + '/assets/audio/events/' + thisEvent + '.ogg';
            eventSound.loop = false;
            eventSound.load();
            this.eventSounds[thisEvent] = eventSound;
        }
    };
    /**
     * Go to the map if there is no dialogue active
     */
    StateService.prototype.goToMap = function () {
        if (!this.dialogueActive) {
            this.playSound('event', 'map');
            this.state = 'map';
        }
    };
    /**
     * Return the current task
     */
    StateService.prototype.getCurrentTask = function () {
        return this.tasks[this.currentTask].description;
    };
    /**
     * Set the current task to the next task in the list
     */
    StateService.prototype.nextTask = function () {
        this.currentTask++;
    };
    /**
     * Update the player's inventory
     * @param item The item to be updated
     * @param amount The amount to update the item by (either positive or negative)
     */
    StateService.prototype.modifyInventory = function (item, amount) {
        this.inventory[item] += amount;
    };
    /**
     * Determines whether the player has enough carrots to unlock the specified location
     * @param location The location to be unlocked
     */
    StateService.prototype.canUnlockLocation = function (location) {
        if (this.inventory.carrots >= this.locations[location].cost) {
            return true;
        }
        return false;
    };
    /**
     * Trade carrots in return for unlocking the specified location
     * @param location The location to be unlocked
     */
    StateService.prototype.unlockLocation = function (location) {
        if (this.inventory.carrots >= this.locations[location].cost) {
            this.inventory.carrots -= this.locations[location].cost;
            this.locations[location].cost = 0;
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Return the cost of the specified location
     * @param location The location to check the cost of
     */
    StateService.prototype.costOfLocation = function (location) {
        return this.locations[location]['cost'];
    };
    /**
     * Return the next piece of dialogue to display, or perform the next event
     */
    StateService.prototype.getNextDialogue = function () {
        var dialogue = this.parts[this.currentPartIndex].dialogue[this.dialogueIndex];
        this.dialogueIndex++;
        if (!dialogue) { // nothing left
            this.currentLocation = '';
            this.state = 'map';
            return null;
        }
        else if (dialogue.name == 'map') { // go to the map
            this.nextLocation = dialogue['nextLocation'];
            this.currentLocation = '';
            this.state = 'map';
            return null;
        }
        else if (dialogue.name == 'task') { // set the next task
            this.nextTask();
            return this.getNextDialogue();
        }
        else if (dialogue.name == 'location') { // go to the specified location
            this.changeLocation(dialogue['location'], true);
            return null;
        }
        else if (dialogue.name == 'inventory') { // update the player's inventory
            this.modifyInventory(dialogue['item'], dialogue['modify']);
            this.playSound('event', dialogue['item']);
            return this.getNextDialogue();
        }
        else if (dialogue.name == 'event') { // play event sound
            this.playSound('event', dialogue['item']);
            return this.getNextDialogue();
        }
        else if (dialogue.name == 'endDialogue') { // end of dialogue for that location
            this.nextLocation = dialogue['location'];
        }
        else if (dialogue.name == 'endPart') { // end of part
            this.setTask();
            this.state = 'home';
        }
        else if (dialogue.name == 'info') {
            if (dialogue['sound']) {
                this.playSound('event', dialogue['sound']);
            }
            else {
                this.playSound('event', 'info');
            }
            return dialogue;
        }
        else { // show actual dialogue
            return dialogue;
        }
    };
    /**
     * Go to the specified location
     * @param location The location to go to
     * @param updateNextLocation Whether or not the specified location is the next location in the story
     */
    StateService.prototype.changeLocation = function (location, updateNextLocation) {
        var _this = this;
        if (updateNextLocation === void 0) { updateNextLocation = false; }
        this.currentLocation = location;
        if (updateNextLocation) {
            this.nextLocation = location;
        }
        this.state = '';
        setTimeout(function () {
            _this.state = 'location';
        }, (50));
    };
    /**
     * Play a sound
     * @param type Type of the sound, can hold the value 'character', 'location' or 'event'
     * @param item The sound to be played
     */
    StateService.prototype.playSound = function (type, item) {
        var soundsArray = this.getSoundArray(type);
        if (soundsArray[item]) {
            soundsArray[item].play();
        }
    };
    /**
     * Stop a sound
     * @param type Type of the sound, can hold the value 'character', 'location' or 'event'
     * @param item The sound to be stopped
     */
    StateService.prototype.stopSound = function (type, item) {
        var soundsArray = this.getSoundArray(type);
        if (soundsArray[item]) {
            soundsArray[item].pause();
        }
    };
    /**
     * Return the relevant sound array
     * @param type Denotes which array to return
     */
    StateService.prototype.getSoundArray = function (type) {
        switch (type) {
            case 'location': return this.locationSounds;
            case 'character': return this.dialogueSounds;
            case 'event': return this.eventSounds;
        }
    };
    /**
     * Displays the most recently set task on the home screen
     */
    StateService.prototype.setTask = function () {
        if (this.currentPartIndex >= 3) {
            this.finishedPart = false;
        }
        else {
            var tasks = [
                'Prepare a 3-slide presentation on the history of carrots, and recent news in the carrot industry.',
                'Complete the provided Excel Exercise worksheet as best you can.',
                'Write a 2-paragraph critical review on the provided Harry Potter extract.'
            ];
            this.taskText = tasks[this.currentPartIndex];
            this.finishedPart = true;
        }
    };
    StateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    deploypath: ''
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\WeiYa\Desktop\Hosting_angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map