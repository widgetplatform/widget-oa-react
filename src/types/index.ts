export interface WidgetConfig {
  id: string;
  buttonPosition?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  buttonColor?: string;
  buttonBackgroundColor?: string;
  buttonMargin?: string;
  displayType?: 'popup' | 'modal';
  svgIcon?: string;
}

declare global {
  interface Window {
    initWidgetPlatform: (config: WidgetConfig) => void;
  }
} 