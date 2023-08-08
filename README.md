# unittests
Tutorial for unit tests

[Testing JavaScript for Node.js wth Mocha](https://app.pluralsight.com/course-player?clipId=91514ae8-dbca-4511-ba02-c45083fcd394)


[TestingNodeWithMocha Git repository](https://github.com/jonathanfmills/TestingNodeWithMocha.git)

Mocha
Chai for asserts - chaijs.com
Sinon for mocking
Istanbul for code coverage


When async function is called, pass done, then call done().

expect
```
expect(something)to.be...
expect(something).to.equal...
expect(something).to.have...

expect(auth).to.be.true

```

should
```
something.should.be...
something.should.equal...
something.should.have...

auth.should.be.true...

```