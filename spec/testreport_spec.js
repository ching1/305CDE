var request = require("request");

var base_url = "https://weather-mongodb-ching1.c9users.io/sh?search="

describe("Test Web Server with city hong kong", function() {
  describe("GET /", function() {
      var data_url = base_url + 'hong kong';
    it("returns status code 200", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  
   it("Test Server return hong kong data not null", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(body).not.toBeNull();
        done();
      });
    });
  });
});

describe("Test Web Server with city london", function() {
  describe("GET /", function() {
      var data_url = base_url + 'london';
    it("returns status code 200", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  
   it("Test Server return usa data not null", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(body).not.toBeNull();
        done();
      });
    });
  });
});

describe("Test Web Server with city beijing", function() {
  describe("GET /", function() {
      var data_url = base_url + 'beijing';
    it("returns status code 200", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  
   it("Test Server return usa data not null", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(body).not.toBeNull();
        done();
      });
    });
  });
});

describe("Test Web Server with city shanghai", function() {
  describe("GET /", function() {
      var data_url = base_url + 'shanghai';
    it("returns status code 200", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  
   it("Test Server return usa data not null", function(done) {
      request.get(data_url, function(error, response, body) {
        expect(body).not.toBeNull();
        done();
      });
    });
  });
});