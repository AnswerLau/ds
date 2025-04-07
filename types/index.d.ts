import { App } from 'vue';

export declare class Button {
  static install(app: App): void;
}

export declare class Icon {
  static install(app: App): void;
}

export declare class Input {
  static install(app: App): void;
}

export declare class Checkbox {
  static install(app: App): void;
}

export declare class Radio {
  static install(app: App): void;
}

export declare class Toggle {
  static install(app: App): void;
}

export declare class Alert {
  static install(app: App): void;
}

export declare class Tooltip {
  static install(app: App): void;
}

export declare class Select {
  static install(app: App): void;
}

export declare class Dropdown {
  static install(app: App): void;
}

export declare class Tab {
  static install(app: App): void;
}

export declare class Slider {
  static install(app: App): void;
}

export declare class Message {
  static install(app: App): void;
}

export declare interface message {
  info(content: string | object, duration?: number): void;
  success(content: string | object, duration?: number): void;
  warning(content: string | object, duration?: number): void;
  error(content: string | object, duration?: number): void;
  loading(content: string | object, duration?: number): void;
  closeAll(): void;
}

export declare function install(app: App): void;

declare const _default: {
  version: string;
  install: typeof install;
  Button: typeof Button;
  Icon: typeof Icon;
  Input: typeof Input;
  Checkbox: typeof Checkbox;
  Radio: typeof Radio;
  Toggle: typeof Toggle;
  Alert: typeof Alert;
  Tooltip: typeof Tooltip;
  Select: typeof Select;
  Dropdown: typeof Dropdown;
  Tab: typeof Tab;
  Slider: typeof Slider;
  Message: typeof Message;
  message: message;
};

export default _default; 