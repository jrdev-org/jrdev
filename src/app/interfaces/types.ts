export type MemberLevel =
| "NOOB"
| "AMATEUR"
| "INTERMEDIATE"
| "10X"
| "CODE NINJA"
| "BYTE WIZARD"
| "TECH GURU"
| "DEBUGGING DEITY";


export interface Member {
id: string;
name: string;
email: string;
phone: string;
organization: string;
level: MemberLevel;
levelProgress: number; // 0-100
}
