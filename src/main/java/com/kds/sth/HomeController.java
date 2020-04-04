package com.kds.sth;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	// home
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
		String formattedDate = dateFormat.format(date);
		
		model.addAttribute("serverTime", formattedDate );
		
		return "home";
	}
	
    /*@RequestMapping(value = "/getData", method = RequestMethod.POST)
    @ResponseBody
    public int insertone(Model model, @RequestBody ModelPerson personJson) {
        logger.info("/rest/insertone");
        int  result = -1;
        
        return result;
    }*/

	// highChart_01
	@RequestMapping(value = "/highChart_01", method = RequestMethod.GET)
	public String highChart_01(Model model) {
		return "highChart_01";
	}
	
	// highChart_02
	@RequestMapping(value = "/highChart_02", method = RequestMethod.GET)
	public String highChart_02(Model model) {
		return "highChart_02";
	}
	
	// d3_chart
	@RequestMapping(value = "/d3_chart", method = RequestMethod.GET)
	public String d3_chart(Model model) {
		return "d3_chart";
	}
	
	// d3_bubble_chart
	@RequestMapping(value = "/d3_bubble_chart", method = RequestMethod.GET)
	public String d3_bubble_chart(Model model) {
		return "d3_bubble_chart";
	}
	
	// agGrid
	@RequestMapping(value = "/agGrid_01", method = RequestMethod.GET)
	public String agGrid_01(Model model) {
		return "agGrid_01";
	}
	
	// summerNote
	@RequestMapping(value = "/summerNote", method = RequestMethod.GET)
	public String summerNote(Model model) {
		return "summerNote";
	}
}
