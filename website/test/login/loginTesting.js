var expect  = require("chai").expect;

var request = require('supertest');
var server = request.agent('http://localhost:3000');

const email = "mikewang.xinling@gmail.com";
const password = "123";


const app = require("../../app");
  
  // before(function(done) {

  // });
describe('GET /login', function(){
    it('uri that requires user to be not logged in', function(done){
        server
            .get('/')                       
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
        .get('/')                       
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
            .send({ email, password})
            .expect(302)
            .expect('Location', '/')
            .end(onResponse);

        function onResponse(err, res) {
           if (err) return done(err);
           return done();
        }
    };
};