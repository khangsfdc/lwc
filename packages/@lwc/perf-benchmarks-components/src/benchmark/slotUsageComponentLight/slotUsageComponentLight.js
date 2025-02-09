/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { LightningElement, api } from 'lwc';

export default class SlotUsageComponentLight extends LightningElement {
    static renderMode = 'light';
    @api componentContent;
    @api rowsOfSlottedContent;
    @api titleOfComponentWithSlot;
    @api rowsOfComponentWithSlot;
}
