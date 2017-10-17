# 编译说明

#### 方式1
- 把所有的ts文件输出到一个js文件中
- tsc --outFile sample.js Validation.ts ZipCodeValidation.ts LettersOnlyValidation.ts test.ts

#### 方式2
- 编译每一个文件（默认方式），那么每个源文件都会对应生成一个JavaScript文件。 然后，在页面上通过 <script>标签把所有生成的JavaScript文件按正确的顺序引进来
- <script src="Validation.js" type="text/javascript" />
- <script src="LettersOnlyValidator.js" type="text/javascript" />
- <script src="ZipCodeValidator.js" type="text/javascript" />
- <script src="Test.js" type="text/javascript" />
- 这种方式不适合后端

