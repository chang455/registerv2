export interface Province {
  id_province: number;
  name_lao: string;
}

export interface District{
  id_district: number;
  name_lao:string;
}

export interface Vaccines{
  id_vaccine_type: number;
  name: string;
  company: string;
  country: string;
  status: string;
}
export interface Location{
  id_location:number;
  name_la:string;
  status:number;
  per_hr_capacity:number;
  per_day_capacity:number;
  active_start_date:Date;
  active_end_date:Date;
}
export interface Job{
  
}
