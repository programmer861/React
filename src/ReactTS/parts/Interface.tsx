
export interface ArrayTS {
  readonly id: string; // только для чтения
  color?: string;     // не обяз пааметр
  size: {
    width: number;
    heidth: number;
  };
  dynamicVariable: any;
  interfaceArray: Array<number>;
  setValue(value: number): number;
}



export interface ArrayObgectInterface {
id: number;
test: number;
name: string;
[key: string]: any
}
