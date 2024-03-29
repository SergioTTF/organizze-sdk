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

export class Invoice {
    'id'?: number;
    'date'?: string;
    'startingDate'?: string;
    'closingDate'?: string;
    'amountCents'?: number;
    'paymentAmountCents'?: number;
    'balanceCents'?: number;
    'previousBalanceCents'?: number;
    'creditCardId'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "startingDate",
            "baseName": "starting_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "closingDate",
            "baseName": "closing_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "amountCents",
            "baseName": "amount_cents",
            "type": "number",
            "format": ""
        },
        {
            "name": "paymentAmountCents",
            "baseName": "payment_amount_cents",
            "type": "number",
            "format": ""
        },
        {
            "name": "balanceCents",
            "baseName": "balance_cents",
            "type": "number",
            "format": ""
        },
        {
            "name": "previousBalanceCents",
            "baseName": "previous_balance_cents",
            "type": "number",
            "format": ""
        },
        {
            "name": "creditCardId",
            "baseName": "credit_card_id",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Invoice.attributeTypeMap;
    }

    public constructor() {
    }
}

