import {FullLibro, Libros} from '../../core/entities/libro.entity';
import {Item, VolumeInfo} from '../interfaces/libros-db.responses';

export class LibrosMapper {
  static fromLibrosDBResultToEntity(items: Item): Libros {
    return {
      kind: items.kind,
      id: items.id,
      etag: items.etag,
      selfLink: items.selfLink,
      volumeInfo: items.volumeInfo,
      saleInfo: items.saleInfo,
      accessInfo: items.accessInfo,
      searchInfo: items.searchInfo,
    };
  }
  static fromLibrosDBToEntity(libro: VolumeInfo): FullLibro {
    return {
      title: libro.title,
      authors: libro.authors,
      publisher: libro.publisher,
      publishedDate: libro.publishedDate,
      description: libro.description,
      industryIdentifiers: libro.industryIdentifiers,
      readingModes: libro.readingModes,
      pageCount: libro.pageCount,
      printType: libro.printType,
      maturityRating: libro.maturityRating,
      allowAnonLogging: libro.allowAnonLogging,
      contentVersion: libro.contentVersion,
      panelizationSummary: libro.panelizationSummary,
      imageLinks: libro.imageLinks,
      language: libro.language,
      previewLink: libro.previewLink,
      infoLink: libro.infoLink,
      canonicalVolumeLink: libro.canonicalVolumeLink,
      categories: libro.categories,
      subtitle: libro.subtitle,
    };
  }
}
