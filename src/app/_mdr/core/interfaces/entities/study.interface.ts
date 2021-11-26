import { DataObject } from './object.interface';


interface MinAge{
   value: number;
   unitName: string;
}

interface MaxAge{
   value: number;
   unitName: string;
}

interface IdentifierOrg {
    id: number;
    name: string;
    rorId: string;
}

interface StudyIdentifier {
   id: number;
   identifierValue: string;
   identifierType: string;
   identifierDate: string;
   identifierLink: string;
   identifierOrg: IdentifierOrg;
}

interface StudyTitle {
   id: number;
   titleType: string;
   titleText: string;
   langCode: string;
   comments: string;
}

interface StudyFeature{
   id: number;
   featureType: string;
   featureValue: string;
}

interface StudyTopic{
   id: number;
   topicType: string;
   meshCoded: boolean;
   meshCode: string;
   meshValue: string;
   originalCtId: number;
   originalCtCode: string;
   originalValue: string;
}

interface StudyRelation{
  id: number;
  relationshipType: string;
  targetStudyId: number;
}

export interface Study {
  id: number;
  displayTitle: string;
  briefDescription: string;
  dataSharingStatement: string;
  studyType: string;
  studyStatus: string;
  studyGenderElig: string;
  studyEnrolment: string;
  minAge: MinAge;
  maxAge: MaxAge;
  studyIdentifiers: Array<StudyIdentifier> | [];
  studyTitles: Array<StudyTitle> | [];
  studyFeatures: Array<StudyFeature> | [];
  studyTopics: Array<StudyTopic> | [];
  studyRelationships: Array<StudyRelation> | [];
  linkedDataObjects: Array<DataObject> | [];
  provenanceString: string;
}


export interface StudyRecordInterface {
    id: number;
    displayTitle: string;
    studyType: string;
    studyStatus: string;
}
