export interface Degree{
    degree:string;
    reason:string;
    requirements:string;
    universities:string;
    careers:string;
    salary:string;
}

export interface DegreeResponse{
    degrees:Degree[];
}