package com.backend;

import java.sql.Connection;
import java.sql.DriverManager;

public class MySQLConnection {
	
	public static Connection getConn() throws Exception{
		
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/exp","root","7989");
		
		return conn;
	}

}
