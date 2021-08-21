var expect  = require("chai").expect;

var request = require('supertest');
var server = request.agent('http://localhost:3000');

const email = "mikewang.xinling@gmail.com";
const password = "123";


//  const app = require("../../app");
  

describe('GET /youtube', function(){
    it('login', loginUser());
    it('getComments', function(done){
        
        server
            .get('/youtube/getcomments/n3-xqj4HwiQ')                       
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