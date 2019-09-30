import Services from "../../libs/Services";

test("Should retrieve some character", async () => {
    const result = await Services.GetCharacters("Hulk");

    expect(result.length).toBeGreaterThan(0);
});

test("Should retrieve some stories from character", async () => {
    const result = await Services.GetStoriesByCharacterId(1009367);

    expect(result.length).toBeGreaterThan(0);
});

test("Should retrieve some characters from story id", async () => {
    const result = await Services.GetCharactersByStoryId(164465);

    expect(result.length).toBeGreaterThan(0);
});

test("Should retrieve story from story id", async () => {
    const result = await Services.GetStoryById(164465);

    expect(result.length).toBeGreaterThan(0);
});