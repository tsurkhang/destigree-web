export interface Degree{
    degree:string;
    reason:string;
    requirements:string;
    university1:string;
    university2:string;
    university3:string;
    careers:string;
    salary:string;
}

export interface DegreeResponse{
    degrees:Degree[];
}