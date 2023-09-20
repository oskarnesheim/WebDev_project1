declare module "chart.js" {
    interface ChartConfiguration {
      type?: string;
      data?: ChartData;
      options?: ChartOptions;
      plugins?: never[];
    }
  
    interface ChartData {
      labels?: string[] | number[];
      datasets?: ChartDataset[];
    }
  
    interface ChartDataset {
      label?: string;
      data?: number[] | null;
      borderColor?: string;
      // Add any other properties you want to include in your datasets
    }
  
    interface ChartOptions {
      scales?: {
        x?: ChartScale;
        y?: ChartScale;
      };
      // Add any other chart options you want to use
    }
  
    interface ChartScale {
      title?: {
        display?: boolean;
        text?: string;
      };
      // Add any other scale options you need
    }
  
    class Chart {
      constructor(ctx: string | CanvasRenderingContext2D, config: ChartConfiguration);
      // Add any other methods or properties you want to use from the Chart class
    }
  
    export default Chart;
  }