export interface Degree{
    degree:string;
    reason:string;
    requirements:string;
    universities:string;
    careers:string;
    salary:number;
}

export interface DegreeResponse{
    degrees:Degree[];
}