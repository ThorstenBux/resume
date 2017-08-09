export class ResumeWork{
/**
       * e.g. Facebook
       */
  company?: string;
          /**
       * e.g. Social Media Company
       */
  description?: string;
          /**
       * e.g. Software Engineer
       */
  position?: string;
          /**
       * e.g. http://facebook.example.com
       */
  url?: string;
          /**
       * resume.json uses the ISO 8601 date standard e.g. 2014-06-29
       */
  startDate?: string;
          /**
       * e.g. 2012-06-29
       */
  endDate?: string;
        /**
       * Give an overview of your responsibilities at the company
       */
  summary?: string;
          /**
       * Specify multiple accomplishments
       */
  highlights?: string[];
      [k: string]: any;
};