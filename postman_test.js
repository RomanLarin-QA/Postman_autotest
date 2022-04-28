//Postman. Автотесты для эндпоинта https://swapi.dev/api/planets/7

pm.test("Ожидаю статус ответа 200", function() {
pm.response.to.have.status(200);
})

pm.test("Response time is less than 200ms", function () {
pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Status code name has string", function () {
pm.response.to.have.status("OK");
});