(function () {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("cds_ovp_tbm_ra.cds_ovp_tbm_ra.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("cds_ovp_tbm_ra.cds_ovp_tbm_ra.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());