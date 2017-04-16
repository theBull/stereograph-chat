"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var core_2 = require("@stereograph/core");
var ChatService = (function () {
    function ChatService(_webSocketService) {
        this._webSocketService = _webSocketService;
        this.messages = new core_2.List();
        this._webSocketService.initialize(function () {
        }, function (message) {
        });
    }
    ChatService.prototype.sendMessage = function (name, text) {
        var message = new core_2.Message();
        message.fromJson({ name: name, text: text });
        this.messages.add(message);
        this._webSocketService.sendMessage(message.toJson());
    };
    return ChatService;
}());
ChatService = __decorate([
    core_1.Injectable()
], ChatService);
exports.ChatService = ChatService;
