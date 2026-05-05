import Light from "./light.ts";
import RemoteControl from "./remoteControl.ts";
import TurnOffCommand from "./turnOffCommand.ts";
import TurnOnCommand from "./turnOnCommand.ts";

const lightReceiver = new Light();
const turnOffCommand = new TurnOffCommand(lightReceiver);
const turnOnCommand = new TurnOnCommand(lightReceiver);
const remoteControl = new RemoteControl(turnOnCommand);

remoteControl.pressButton();
remoteControl.setCommand(turnOffCommand);
remoteControl.pressButton();
