import {
  AccessInfo,
  ImageLinks,
  IndustryIdentifier,
  Kind,
  Language,
  MaturityRating,
  PanelizationSummary,
  PrintType,
  ReadingModes,
  SaleInfo,
  SearchInfo,
  VolumeInfo,
} from '../../infrastructure/interfaces/libros-db.responses';

export interface Libros {
  kind: Kind;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
  searchInfo: SearchInfo;
}
export interface FullLibro extends VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: string;
  description: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: PrintType;
  maturityRating: MaturityRating;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: Language;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  categories?: string[];
  subtitle?: string;
}
