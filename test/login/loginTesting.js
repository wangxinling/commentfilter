var expect  = require("chai").expect;

var request = require('supertest');
var server = request.agent('http://localhost:3000');

const username = "jay";
const password = "jay";


  const app = require("../../app");
  
  // before(function(done) {

  // });
describe('GET /api/getDir', function(){
    it('uri that requires user to be not logged in', function(done){
        server
            .get('/user')                       
            .expect(302)
            .end(function(err, res){
                if (err) return done(err);
                console.log(res.body);
                done()
            });
        });
    it('login', loginUser());
    it('uri that requires user to be logged in', function(done){
    server
        .get('/user')                       
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            console.log(res.body);
            done()
        });
    });
});


function loginUser() {
    return function(done) {
        server
            .post('/login')
            .send({ username, password})
            .expect(302)
            .expect('Location', '/')
            .end(onResponse);

        function onResponse(err, res) {
           if (err) return done(err);
           return done();
        }
    };
};