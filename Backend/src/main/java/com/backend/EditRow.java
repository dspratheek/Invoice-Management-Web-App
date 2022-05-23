package com.backend;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;

@WebServlet("/EditRow")
public class EditRow extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
    public EditRow() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		try {
			
			String invoice_currency = request.getParameter("invoice_currency");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			String sl_no = request.getParameter("sl_no");

			String query = "UPDATE winter_internship SET invoice_currency = ?, cust_payment_terms = ? WHERE sl_no = ?";
			
			Connection conn = MySQLConnection.getConn();
			PreparedStatement ps = conn.prepareStatement(query);
			
			ps.setString(1, invoice_currency);
			ps.setString(2, cust_payment_terms);
			ps.setString(3, sl_no);
			ps.executeUpdate();
			
			conn.close();
					
			}
			catch (Exception e) {
				e.printStackTrace();
			}
		}
		
	

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		doGet(request, response);
	}

}
