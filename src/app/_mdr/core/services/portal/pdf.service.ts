import {Injectable} from '@angular/core';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { Study } from './../../interfaces/dto/study.interface';


@Injectable({providedIn: 'root'})
export class PdfService {

  constructor() {
  }

  multipleStudiesPDFGenerator(data: Array<Study>) {

    const doc = new jsPDF();
    let bodyData: Array<any> = [];
    const fileName = 'Studies list - ' + Date.now().toString();

    data.forEach((study, index) => {
      bodyData.push([{content: study.display_title, colSpan: 4, rowSpan: 1,
        styles: {halign: 'left', fontStyle: 'bold', fontSize: 16}}]);

      bodyData.push([{ content: study.brief_description, colSpan: 4, rowSpan: 1,
        styles: { halign: 'left' } }]);

      for (const dataObject of study.linked_data_objects){
        const dataObjectType = dataObject.object_type;

        let access_url = 'None';
        if (dataObject.access_details !== null && dataObject.access_details !== undefined) {
          if (dataObject.access_details.url !== null && dataObject.access_details.url !== undefined) {
            access_url = dataObject.access_details.url;
          }
        }

        let object_url = 'None';
        if (dataObject.object_url !== null && dataObject.object_url !== undefined) {
          object_url = dataObject.object_url;
        }

        const dataObjectDescription =
          dataObject.display_title + '\n\n' +
          'Access details: ' + access_url + '\n' +
          'URL: ' + object_url + '\n';
        const dataObjectYear = dataObject.publication_year;
        const dataObjectAccessType = dataObject.access_type;
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

    bodyData.push([{content: studyData.display_title, colSpan: 4, rowSpan: 1,
      styles: {halign: 'left', fontStyle: 'bold', fontSize: 16}}]);

    bodyData.push([{ content: studyData.brief_description, colSpan: 4, rowSpan: 1, styles: { halign: 'left' } }]);
    bodyData.push([
      { content: 'Study type: ' + studyData.study_type, colSpan: 2, rowSpan: 1, styles: { halign: 'left' } },
      { content: 'Study status: ' + studyData.study_status, colSpan: 2, rowSpan: 1, styles: { halign: 'left' } }
    ]);

    bodyData.push([
      { content: 'Study identifiers', colSpan: 4, rowSpan: 1, styles: { halign: 'left', fontStyle: 'bold', fontSize: 14 } },
    ]);

    for (const studyIdentifier of studyData.study_identifiers){
      bodyData.push([
        { content: 'Identifier type: \n' + studyIdentifier.identifier_type, rowSpan: 1, styles: { halign: 'left' } },
        { content: 'Identifier value: \n' + studyIdentifier.identifier_value, rowSpan: 1, styles: { halign: 'left' } },
        { content: 'Identifier date: \n' + studyIdentifier.identifier_date, rowSpan: 1, styles: { halign: 'left' } },
        { content: 'Identifier link: \n' + studyIdentifier.identifier_link, rowSpan: 1, styles: { halign: 'left' } }
      ]);
    }

    bodyData.push([
      { content: 'Related data objects', colSpan: 4, rowSpan: 1, styles: { halign: 'left', fontStyle: 'bold', fontSize: 14 } },
    ]);

    // tslint:disable-next-line:prefer-for-of
    for (const dataObject of studyData.linked_data_objects) {
      const dataObjectType = dataObject.object_type;

      // tslint:disable-next-line:max-line-length
      let access_url = 'None';
      // tslint:disable-next-line:max-line-length
      if (dataObject.access_details !== null && dataObject.access_details !== undefined) {
        // tslint:disable-next-line:max-line-length
        if (dataObject.access_details.url !== null && dataObject.access_details.url !== undefined) {
          access_url = dataObject.access_details.url;
        }
      }

      let object_url = 'None';
      // tslint:disable-next-line:max-line-length
      if (dataObject.object_url !== null && dataObject.object_url !== undefined) {
        object_url = dataObject.object_url;
      }

      const dataObjectDescription =
        dataObject.display_title + '\n\n' +
        'Access details: ' + access_url + '\n' +
        'URL: ' + object_url + '\n';
      const dataObjectYear = dataObject.publication_year;
      const dataObjectAccessType = dataObject.access_type;
      bodyData.push([dataObjectType, dataObjectDescription, dataObjectYear, dataObjectAccessType]);
    }

    // doc.text(doc.splitTextToSize(studyData.display_title, 180), 15, 10);
    // @ts-ignore
    doc.autoTable({
      startY: 20,
      theme: 'grid',
      body: bodyData,
    });
    doc.save(studyData.display_title + '.pdf');
  }

}
