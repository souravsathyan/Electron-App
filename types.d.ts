type Statistics = {
  cpuUsage: number;
  ramUsage: number;
  storageUsage: number;
};

type StatisticsData = {
  totalStorage: number;
  cpuModel: string;
  totalMemoryUsage: number;
};

type EventPayloadMapping = {
  // event name and payload type
  stats: Statistics;
  getStaticData: StatisticsData;
};

interface Window {
  electron: {
    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
    getStaticData: () => Promise<StatisticsData>;
  };
}
