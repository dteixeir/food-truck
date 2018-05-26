IF NOT EXISTS(SELECT 1 FROM Users WHERE Id = '9A0B21B5-CAEE-4777-87E4-35D14B2C7CF9')
BEGIN
    INSERT INTO [dbo].[Users]
    ([Id], [CreateDateTime], [Email], [FirstName], [LastName], [Password], [UpdateDateTime], [Username], [CreateUserId], [UpdateUserId], [IsActive], [IsDeleted], [FullName])
    VALUES('18A68195-F132-4BD6-9FEE-C0991F3E5F57', '2018-05-26 20:05:43.4505450', 'danny@fake.com', 'Danny', 'Teixeira', '$2a$10$Bq8pMenYIYK0kSCvqYZMrei4jLwNzoXEF9D.ladCWA1yusiSOzBuy', '2018-05-26 20:05:43.4505450', 'danotex', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', 1, 0, 'Danny Teixeira')
END

IF NOT EXISTS(SELECT 1 FROM FoodTrucks WHERE Id = '3A5CAFEE-6BE0-4D42-8503-67E267FCF083')
BEGIN
    insert into FoodTrucks(Id, Name, Description, WebsiteUrl, CreateUserId , CreateDateTime, IsActive, IsDeleted)
    Values('3A5CAFEE-6BE0-4D42-8503-67E267FCF083', 'All Star Café', 'Owner, John Rust, worked as the broiler chef in a steak house and has taken his meaty specialties on the road.', 'http://www.all-starcafe.com/', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', GETUTCDATE(),  1, 0)
END

IF NOT EXISTS(SELECT 1 FROM FoodTrucks WHERE Id = 'C07294A8-997B-4E6F-9C31-BC27B48D5B7B')
BEGIN
    insert into FoodTrucks(Id, Name, Description, WebsiteUrl, CreateUserId , CreateDateTime, IsActive, IsDeleted)
    Values('C07294A8-997B-4E6F-9C31-BC27B48D5B7B', 'The Art of Baking', 'Charlotte’s first mobile bakery operating in a purple food truck.', 'http://www.bakinginc.com/', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', GETUTCDATE(),  1, 0)
END

IF NOT EXISTS(SELECT 1 FROM FoodTrucks WHERE Id = '068BAE82-719C-41FB-843A-580924FB3747')
BEGIN
    insert into FoodTrucks(Id, Name, Description, WebsiteUrl, CreateUserId , CreateDateTime, IsActive, IsDeleted)
    Values('068BAE82-719C-41FB-843A-580924FB3747', 'Auto Burger and Fry Guys', 'These guys grind their burgers every day, along with curing and smoking their own bacon and making their own condiments from fresh, local ingredients.', 'http://autoburgerandfryguys.com/', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', GETUTCDATE(),  1, 0)
END

IF NOT EXISTS(SELECT 1 FROM FoodTrucks WHERE Id = '0E222D4A-C39C-431A-A4E5-56F00635DCDF')
BEGIN
    insert into FoodTrucks(Id, Name, Description, WebsiteUrl, CreateUserId , CreateDateTime, IsActive, IsDeleted)
    Values('0E222D4A-C39C-431A-A4E5-56F00635DCDF', 'Bebo’s American Bistro', 'The intersection where The Man Show meets American Bistro in the South. You’ll see what I mean when you get there.', '', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', GETUTCDATE(),  1, 0)
END

IF NOT EXISTS(SELECT 1 FROM FoodTrucks WHERE Id = 'E917189F-16A0-496C-BBF5-5C7644800BE0')
BEGIN
    insert into FoodTrucks(Id, Name, Description, WebsiteUrl, CreateUserId , CreateDateTime, IsActive, IsDeleted)
    Values('E917189F-16A0-496C-BBF5-5C7644800BE0', 'Belly Backers', 'Belly Backer’s serves a variety of foods but specializes in Gaufre Liege waffles.', 'http://www.bellybackers.com/', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', GETUTCDATE(),  1, 0)
END

IF NOT EXISTS(SELECT 1 FROM FoodTrucks WHERE Id = '5CF5C021-57E2-48E6-96C1-01F8ADB45C5E')
BEGIN
    insert into FoodTrucks(Id, Name, Description, WebsiteUrl, CreateUserId , CreateDateTime, IsActive, IsDeleted)
    Values('5CF5C021-57E2-48E6-96C1-01F8ADB45C5E', 'Bleu Barn Bistro', 'Chef Tara Diamante and Chef Brenton Ebersold met at Johnson & Wales University  and have created a food truck with a season menu that caters to carnivores, omnivores, vegetarian/vegans and gluten-free folks alike.', 'http://bleubarnbistro.com/', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', GETUTCDATE(),  1, 0)
END

IF NOT EXISTS(SELECT 1 FROM FoodTrucks WHERE Id = 'EC865E76-A0E1-4F77-B479-AD044F8EA186')
BEGIN
    insert into FoodTrucks(Id, Name, Description, WebsiteUrl, CreateUserId , CreateDateTime, IsActive, IsDeleted)
    Values('EC865E76-A0E1-4F77-B479-AD044F8EA186', 'Cheese to the Mac', '', 'http://www.cheesetothemac.com/', '18A68195-F132-4BD6-9FEE-C0991F3E5F57', GETUTCDATE(),  1, 0)
END
