package com.backend;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


@WebServlet("/AddRow")
public class AddRow extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public AddRow() {
        super();
        
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			
			String q = "SELECT MAX(sl_no) FROM `winter_internship`;";
			Connection conn = MySQLConnection.getConn();
			PreparedStatement ps0 = conn.prepareStatement(q);
			ResultSet rs = ps0.executeQuery(q);
			rs.next();
			int slMax = rs.getInt("MAX(sl_no)");
			slMax ++;  
			
			POJO data = new POJO();

			data.setSl_no(slMax);   

			data.setBusiness_code(request.getParameter("business_code"));   
			data.setCust_number(request.getParameter("cust_number"));   
			data.setClear_date(request.getParameter("clear_date"));   
			data.setBuisness_year(Integer.parseInt(request.getParameter("buisness_year")));   
			data.setDoc_id(request.getParameter("doc_id"));   
			data.setPosting_date(request.getParameter("posting_date"));   
			data.setDocument_create_date(request.getParameter("document_create_date"));   
			data.setDue_in_date(request.getParameter("due_in_date"));   
			data.setInvoice_currency(request.getParameter("invoice_currency"));   
			data.setDocument_type(request.getParameter("document_type"));   
			data.setPosting_id(Integer.parseInt(request.getParameter("posting_id")));   
			data.setTotal_open_amount(request.getParameter("total_open_amount"));   
			data.setBaseline_create_date(request.getParameter("baseline_create_date"));   
			data.setCust_payment_terms(request.getParameter("cust_payment_terms"));   
			data.setInvoice_id(request.getParameter("invoice_id"));   
			
			
			String query = "INSERT INTO winter_internship (sl_no, business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement ps = conn.prepareStatement(query);
			
			
			ps.setInt(1, data.getSl_no());
			ps.setString(2, data.getBusiness_code());
			ps.setString(3, data.getCust_number());
			ps.setString(4, data.getClear_date());
			ps.setInt(5, data.getBuisness_year());
			ps.setString(6, data.getDoc_id());
			ps.setString(7, data.getPosting_date());
			ps.setString(8, data.getDocument_create_date());
			ps.setString(9, data.getDue_in_date());
			ps.setString(10, data.getInvoice_currency());
			ps.setString(11, data.getDocument_type());
			ps.setInt(12, data.getPosting_id());
			ps.setString(13, data.getTotal_open_amount());
			ps.setString(14, data.getBaseline_create_date());
			ps.setString(15, data.getCust_payment_terms());
			ps.setString(16, data.getInvoice_id());
			
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
