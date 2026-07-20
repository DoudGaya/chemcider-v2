import { documentTypes } from "./documents";
import {
  blockContent,
  contentSection,
  navigationChild,
  navigationGroup,
  navigationItem,
  roleAssignment,
  seoFields,
} from "./objects";

export const schemaTypes = [
  seoFields,
  blockContent,
  navigationChild,
  navigationItem,
  navigationGroup,
  roleAssignment,
  contentSection,
  ...documentTypes,
];
