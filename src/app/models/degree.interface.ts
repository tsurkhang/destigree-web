export interface Degree{
    title:string;
    reason:string;
    requirements:string;
    universities:string;
    careers:string;
    salary:number;
}

export interface DegreeResponse{
    degrees:Degree[];
}