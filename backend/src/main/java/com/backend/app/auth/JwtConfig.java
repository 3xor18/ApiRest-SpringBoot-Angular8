package com.backend.app.auth;

public class JwtConfig {
	public static final String LLAVE_SECRETA="alguna.clave.secreta.12345678";
	
	public static final String RSA_PRIVATE="-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEowIBAAKCAQEA1IAioD73nI8WKPlZBQxN15Cjdfm/Ifobdny/7ZBt1MiGuW9K\r\n" + 
			"n0Fde+KyTZt5aq6hOxMQbCRFG2Ej7RHK4WFT80xyoj6iuaSTD6VNpqgVuI+DOMTY\r\n" + 
			"N5Zf7cr7FqXe9vBxuKvCeMeOnK2iBx7MFg38orDmIhUrNIgiUcrb7bWfvIl1vByM\r\n" + 
			"VyY0CuZHEb/vFTLfFPWrQkv8Ch3m4W9hpP37+GouwqF/wGM0YRnfTseNIxscp+oi\r\n" + 
			"5nvUYaufOaA3lT+p7vHZFFC4PJTLknzBnngoiF8sI2k6gLmKX/1VGqs6N/uYy35f\r\n" + 
			"mXmlEf8W/4zGuj356sIQmJ6YZ4Aa8CmsmQXsGQIDAQABAoIBACykXqHbmJlDVhx1\r\n" + 
			"hcYRt6i5sh1uwkCZEnvp6Ug3N1ukZOlAACVEzibgkSTMrM1Esop+jsypMft2hN2h\r\n" + 
			"B0Yh9EkAnnSHRBhMArkeuRlx5l5HiAG9GM9UwAJsyiMP5a9rA/kP3GMTSVqQ/6EP\r\n" + 
			"T0Cy34guMaqnV9RJZSxZuapOpagttolAHrwm5E9CpoMN2z2/EaQzjkp+eJ9NbPsE\r\n" + 
			"R2TrfaBELwGb3JL4bcGUSQD4XPNTwGiClZ6n20mWhtj4S/wQnpIYwZA9U3pSEuTP\r\n" + 
			"w2Jf4TDD7iNe/P+qNN3Rikv1JTvXz73CVfZY5X/NtXW/r+CQYucfeHQWSqbgkzTr\r\n" + 
			"iNtn+CECgYEA8PIohm6/vHnjNCLtXp31mJUnXsEc0BM0QOcK2EWyU+eabe13BOhI\r\n" + 
			"08XeDRFlFoNsfMrzkGEM/BRjSFYpSBtv8IHdUEXloSFiZkPe3jeBluHYrXY8FTAA\r\n" + 
			"kD8WMz1y4NpAU9W2CD3uv1iVFafeD1hrUSiaTLJDz7Nl860lIuVDJIsCgYEA4ccA\r\n" + 
			"0N+E887DTSMZ/xG/l6gFSk9DpDJM7ye8/5tWUbhrgj/qZu7q6ZGG5HA7YW665rzt\r\n" + 
			"FkqTGp4rUy3bGe/7jokO0FY/lf9G+aHeJRw6x3x7gfZEMfvzDelyzpw59pPIcQkU\r\n" + 
			"4PB2mIJ3JWy1ml794ZcfS1h4QpVAMd6iZ1xHsmsCgYEAqVbIPJMhlmlj0YSqp1EF\r\n" + 
			"BxPs859tjJ+yndrDuHRjfKzN0GyQtZY7ePsbsLuE/GmpmZtZyyMqaRA7Jt/Ha7I8\r\n" + 
			"3h+nV3+If9JiwdT5kdwY694W1vK+D3YJL1fnVmPdlUJO65zLrsc4QKsVPH8ahlZy\r\n" + 
			"Njv/FeBD4HoJMVWDQB85LTkCgYBpNh8/NqnyI4wHSjA3GMI7neS5OC7BOV94owAD\r\n" + 
			"7RNQiawvyjElPnjh1xsRIOvK/5rBI5EoLiBW6xYtcNUFRTvotB3fIBIJiCg+9Btd\r\n" + 
			"F8acZ3n2mhg1Yr9k4EDL3ylzqnJhmmXMXMInV8TF/96wzUtp8M54ggWooXyEwMbV\r\n" + 
			"e789eQKBgEYzJwb/2JDbylSGMGx/kFeb4JQwc6AMo8ScA+MrumTSevcxBkOgB1tW\r\n" + 
			"ybQYWztCNBtuDlLjACubGHUK6QhLpfkg+XCa5EN6W2hokuBVOi3fNHvgCA/wvcq4\r\n" + 
			"NG26ZnbgmSSEGdv2+ZqHLU3lgi5mCbUfr+lt9UhmqTh8p1p2ahz8\r\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLIC="-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA1IAioD73nI8WKPlZBQxN\r\n" + 
			"15Cjdfm/Ifobdny/7ZBt1MiGuW9Kn0Fde+KyTZt5aq6hOxMQbCRFG2Ej7RHK4WFT\r\n" + 
			"80xyoj6iuaSTD6VNpqgVuI+DOMTYN5Zf7cr7FqXe9vBxuKvCeMeOnK2iBx7MFg38\r\n" + 
			"orDmIhUrNIgiUcrb7bWfvIl1vByMVyY0CuZHEb/vFTLfFPWrQkv8Ch3m4W9hpP37\r\n" + 
			"+GouwqF/wGM0YRnfTseNIxscp+oi5nvUYaufOaA3lT+p7vHZFFC4PJTLknzBnngo\r\n" + 
			"iF8sI2k6gLmKX/1VGqs6N/uYy35fmXmlEf8W/4zGuj356sIQmJ6YZ4Aa8CmsmQXs\r\n" + 
			"GQIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";
}
