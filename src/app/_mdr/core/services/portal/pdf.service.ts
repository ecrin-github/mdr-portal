import {Injectable} from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Study } from '../../interfaces/entities/study.interface';


@Injectable({providedIn: 'root'})
export class PdfService {

  constructor() {
  }

  multipleStudiesPDFGenerator(data: Array<Study>) {

    const doc = new jsPDF();
    let bodyData: Array<any> = [];
    const fileName = 'Studies list - ' + Date.now().toString();

    data.forEach((study, index) => {
      bodyData.push([{content: study.displayTitle, colSpan: 4, rowSpan: 1,
        styles: {halign: 'left', fontStyle: 'bold', fontSize: 16}}]);

      bodyData.push([{ content: study.briefDescription, colSpan: 4, rowSpan: 1,
        styles: { halign: 'left' } }]);

      for (const dataObject of study.linkedDataObjects){
        const dataObjectType = dataObject.objectType;

        let accessUrl = 'None';
        if (dataObject.accessDetails !== null && dataObject.accessDetails !== undefined) {
          if (dataObject.accessDetails.url !== null && dataObject.accessDetails.url !== undefined) {
            accessUrl = dataObject.accessDetails.url;
          }
        }

        let objectUrl = 'None';
        if (dataObject.objectUrl !== null && dataObject.objectUrl !== undefined) {
          objectUrl = dataObject.objectUrl;
        }

        const dataObjectDescription =
          dataObject.displayTitle + '\n\n' +
          'Access details: ' + accessUrl + '\n' +
          'URL: ' + objectUrl + '\n';
        const dataObjectYear = dataObject.publicationYear;
        const dataObjectAccessType = dataObject.accessType;
        bodyData.push([dataObjectType, dataObjectDescription, dataObjectYear, dataObjectAccessType]);
      }

      // const splitTitle = doc.splitTextToSize(data[i].display_title, 180);

      if (index === 0) {
        // doc.text(splitTitle, 15, 10);
        // @ts-ignore
        doc.autoTable({
          startY: 20,
          theme: 'grid',
          body: bodyData,
        });
      } else {
        // @ts-ignore
        // doc.text(splitTitle, 5, doc.autoTable.previous.finalY + 15);
        // @ts-ignore
        doc.autoTable({
          // @ts-ignore
          startY: doc.autoTable.previous.finalY + 5,
          theme: 'grid',
          body: bodyData,
        });
      }
      bodyData = [];
    });

    doc.save(fileName + '.pdf');
  }


  singleStudyPDFGenerator(studyData: Study){
    const doc = new jsPDF();

    const bodyData: Array<any> = [];

    bodyData.push([{content: studyData.displayTitle, colSpan: 4, rowSpan: 1,
      styles: {halign: 'left', fontStyle: 'bold', fontSize: 16}}]);

    bodyData.push([{ content: studyData.briefDescription, colSpan: 4, rowSpan: 1, styles: { halign: 'left' } }]);
    bodyData.push([
      { content: 'Study type: ' + studyData.studyType, colSpan: 2, rowSpan: 1, styles: { halign: 'left' } },
      { content: 'Study status: ' + studyData.studyStatus, colSpan: 2, rowSpan: 1, styles: { halign: 'left' } }
    ]);

    bodyData.push([
      { content: 'Study identifiers', colSpan: 4, rowSpan: 1, styles: { halign: 'left', fontStyle: 'bold', fontSize: 14 } },
    ]);

    for (const studyIdentifier of studyData.studyIdentifiers){
      bodyData.push([
        { content: 'Identifier type: \n' + studyIdentifier.identifierType, rowSpan: 1, styles: { halign: 'left' } },
        { content: 'Identifier value: \n' + studyIdentifier.identifierValue, rowSpan: 1, styles: { halign: 'left' } },
        { content: 'Identifier date: \n' + studyIdentifier.identifierDate, rowSpan: 1, styles: { halign: 'left' } },
        { content: 'Identifier link: \n' + studyIdentifier.identifierLink, rowSpan: 1, styles: { halign: 'left' } }
      ]);
    }

    bodyData.push([
      { content: 'Related data objects', colSpan: 4, rowSpan: 1, styles: { halign: 'left', fontStyle: 'bold', fontSize: 14 } },
    ]);

    for (const dataObject of studyData.linkedDataObjects) {
      const dataObjectType = dataObject.objectType;

      let accessUrl = 'None';
      if (dataObject.accessDetails !== null && dataObject.accessDetails !== undefined) {
        if (dataObject.accessDetails.url !== null && dataObject.accessDetails.url !== undefined) {
          accessUrl = dataObject.accessDetails.url;
        }
      }

      let objectUrl = 'None';
      if (dataObject.objectUrl !== null && dataObject.objectUrl !== undefined) {
        objectUrl = dataObject.objectUrl;
      }

      const dataObjectDescription =
        dataObject.displayTitle + '\n\n' +
        'Access details: ' + accessUrl + '\n' +
        'URL: ' + objectUrl + '\n';
      const dataObjectYear = dataObject.publicationYear;
      const dataObjectAccessType = dataObject.accessType;
      bodyData.push([dataObjectType, dataObjectDescription, dataObjectYear, dataObjectAccessType]);
    }

    // doc.text(doc.splitTextToSize(studyData.display_title, 180), 15, 10);
    // @ts-ignore
    doc.autoTable({
      startY: 20,
      theme: 'grid',
      body: bodyData,
    });
    doc.save(studyData.displayTitle + '.pdf');
  }

}
