import React, { useEffect } from 'react';
import { WidgetConfig } from '../types';

export interface CustomerChatWidgetProps extends WidgetConfig {}

export const CustomerChatWidget: React.FC<CustomerChatWidgetProps> = (props) => {
  useEffect(() => {
    // Create and load the script only once
    const scriptId = 'customer-chat-widget-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://cdn.widgetplatform.com/widget-oa/js/v1.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.initWidgetPlatform(props);
      };
      document.head.appendChild(script);
    } else {
      // If script already exists, just reinitialize with new props
      window.initWidgetPlatform(props);
    }

    // Cleanup function
    return () => {
      // Optional: Add cleanup logic if needed
    };
  }, [props]);

  // Component doesn't render anything visible
  return null;
}; 