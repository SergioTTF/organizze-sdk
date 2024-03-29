/**
 * Organizze API
 * The Organizze API enables communication with your Organizze account. This document explains how Organizze works, the involved objects, and how communication can be achieved. This is the first version of the API, still in beta, and some changes and improvements will be implemented in the future. 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class Category {
    'id'?: number;
    'name'?: string;
    'description'?: string;
    'parentId'?: number;
    'recurring'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "number",
            "format": ""
        },
        {
            "name": "recurring",
            "baseName": "recurring",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Category.attributeTypeMap;
    }

    public constructor() {
    }
}

