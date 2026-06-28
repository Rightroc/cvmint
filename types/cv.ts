export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  title: string;
  summary: string;
}

export interface Education {
  school: string;
  degree: string;
  course: string;
  startYear: string;
  endYear: string;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string;
}

export interface Skill {
  technical: string[];
  soft: string[];
}

export interface Referee {
  name: string;
  position: string;
  phone: string;
  email: string;
}

export interface CVData {
  personal: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill;
  referee: Referee[];
}