
interface AmplitudeInstance {
  track: (eventName: string, eventProperties?: Record<string, any>) => void;
  add: (plugin: any) => void;
  init: (apiKey: string, options?: any) => void;
}

interface Window {
  amplitude?: AmplitudeInstance;
  sessionReplay?: {
    plugin: (options: { sampleRate: number }) => any;
  };
}
