import Controller from './controller';
import UserInterface from './userInterface';

const chatWindows = new UserInterface(document.querySelector('#chat-id'));
chatWindows.bindToDOM();

const chatBodyController = new Controller(chatWindows);
chatBodyController.init();
