import Controller from './controller.js';
import UserInterface from './userInterface.js';

const chatWindows = new UserInterface(document.querySelector('#chat-id'));
chatWindows.bindToDOM();

const chatBodyController = new Controller(chatWindows);
chatBodyController.init();
