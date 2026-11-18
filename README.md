# موقع AXIS - معرض علي اكرم للالكترونيات

- **الموقع للزبائن:** https://ps4gh.github.io/ali/
- **لوحة التحكم (لصاحب المحل):** https://ps4gh.github.io/ali/admin.html

## لوحة التحكم
تضيف وتعدل وتحذف الألعاب، وتغيّر معلومات المحل، وكلشي ينحفظ مباشرة على هذا المشروع. الموقع يتحدث خلال دقيقة أو دقيقتين.

تحتاج رمز دخول (Token) من GitHub مرة وحدة:
1. افتح https://github.com/settings/personal-access-tokens/new وإنت مسجّل بحساب ps4gh.
2. **Token name:** اكتب `AXIS admin`. **Expiration:** اختار `No expiration` أو مدة طويلة.
3. **Repository access:** اختار `Only select repositories` ثم اختار `ali`.
4. **Permissions:** افتح `Repository permissions` ← `Contents` ← اختار `Read and write`.
5. اضغط **Generate token** وانسخ الرمز (يبدي بـ `github_pat_`).
6. افتح لوحة التحكم والصق الرمز واضغط **دخول**.

لا تعطي الرمز لأي أحد.

## الملفات
- `games.js`: بيانات الألعاب ومعلومات المحل.
- `covers/`: صور أغلفة الألعاب.
- `admin.html`: لوحة التحكم.
- `manifest.webmanifest` و `sw.js` و `icons/`: تنزيل الموقع كتطبيق على الموبايل.
