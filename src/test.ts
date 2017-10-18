import "./polyfills.ts";
import "zone.js/dist/long-stack-trace-zone";
import "zone.js/dist/proxy.js";
import "zone.js/dist/sync-test";
import "zone.js/dist/jasmine-patch";
import "zone.js/dist/async-test";
import "zone.js/dist/fake-async-test";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { getTestBed, TestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

// unfortunately there"s no typing for the `__karma__` variable. Just declare it as any.
declare var __karma__: any;
declare var require: any;

// prevent Karma from running prematurely.
__karma__.loaded = function (): void {
  // noop
};

// first, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// then we find all the tests.
let context: any = require.context("./", true, /\.spec\.ts/);

// and load the modules.
context.keys().map(context);

// finally, start Karma to run the tests.
__karma__.start();