/**
 * @module NReports (Node Reports)
 */

/**
 * Library version.
 */
exports.version = '0.1.0';

/**
 * Dependencies
 * @requires Report
 * @requires ReportParameter
 * @requires ReportEngine
 */
var Report = require('./lib/report'),
	ReportParameter = require('./lib/parameter'),
	ReportEngine = require('./lib/engine'),
	LiveJsonDatasource = require('./lib/datasources/livejson'),
	WebJsonDatasource = require('./lib/datasources/webjson'),
	HandlebarsRuntime = require('./lib/runtimes/handlebarsruntime'),
	PdfPipeline = require('./lib/pipelines/pdfpipeline');

exports.Report = Report;
exports.ReportParameter = ReportParameter;
exports.ReportEngine = ReportEngine;
exports.HandlebarsRuntime = HandlebarsRuntime;
exports.LiveJsonDatasource = LiveJsonDatasource;
exports.WebJsonDatasource = WebJsonDatasource;
exports.PdfPipeline = PdfPipeline;