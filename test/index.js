'use strict';

const
    expect = require('chai').expect,
    data = require("./node.test_data"),
    node = require("../src/node");

describe("Works with files (virtual / non-real files)", function () {

    it("Supports new MindMap format", function () {
        const mm = data.simple_in;
        const output = node.xmler.buildObject(mm);
        expect(output).to.not.contain("<?xml");
    });

    // it("Doesn't corrupt files", () =>{
    // the only difference - spaces. So I should serialize XML without spaces and ensure that it's the same
    // fail("Not implemented")
    // });
});
