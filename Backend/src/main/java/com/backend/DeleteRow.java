package com.backend;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

@WebServlet("/DeleteRow")
public class DeleteRow extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public DeleteRow() {
        super();
        // TODO Auto-generated constructor stub
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		try {
	
			StringBuilder sl_nos = new StringBuilder (); 
			String vals[] = request.getParameterValues("sl_no_arr");
			for (String sl_no: vals){
				
				sl_nos.append("'").append(sl_no).append("',");
				
				} 
			sl_nos.deleteCharAt(sl_nos.length() - 1);			
			
			Connection conn = MySQLConnection.getConn();

			String query = "DELETE FROM winter_internship WHERE sl_no IN (" + sl_nos + ")";
			
			PreparedStatement ps = conn.prepareStatement(query);
			ps.executeUpdate();
			
			conn.close();
			response.addHeader("Access-Control-Allow-Origin", "*");
			response.addHeader("Access-Control-Allow-Methods", "*");
			response.addHeader("Access-Control-Allow-Headers", "*");
					
			}
			catch (Exception e) {
				e.printStackTrace();
			}
		}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
