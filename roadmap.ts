// experience
interface IHighlights {
  title: string;
  description?: string;
  hilights?: IHighlights[];
}

interface ICompany {
  name: string;
  type: string;
  website: string;
  description: string;
  productOrService: string;
}

interface IExperience {
  title: string;
  date: string;
  company: ICompany;
  hilights: IHighlights[];
}

interface IEducation {
  title: string;
  date: string;
}

interface IContactInfo {
  email: string;
  phone: string;
  github: string;
  linkedIn: string;
}

interface schema {
  name: string;
  title: string;
  education: IEducation;
  address: string;
  contactInfo: IContactInfo;
  experience: IExperience[];
  skills: {
    language: string[];
    librariesAndFramework: string[];
    api: string[];
    cms: string[];
  };
}
